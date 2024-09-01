require('dotenv').config();
const PlantCollection = require('../models/plantCollection')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');


const s3 = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

console.log('AWS Region:', process.env.REGION);
console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID);


const BUCKET =process.env.S3_BUCKET;

module.exports = {
    new: Newplant,
    create,
    show,
}

async function Newplant(req, res) {

    const plantCollection = await PlantCollection.findById(req.params.id)
    res.render('plants/new', { title: 'Add Plant', plantCollection })

}

async function create(req, res) {
    try {
        console.log('Request body:', req.body);
        console.log('Uploaded file:', req.file);
        const plantCollection = await PlantCollection.findById(req.params.id)
        const body = req.body
        if ("Native" in body) {
            body.Native = true;
        } else {
            body.Native = false;
        }

        if (req.file){
            console.log("File details:", req.file);
            const file = req.file;
            const userId = req.user.id
            const key = `${userId}/${uuidv4()}`;
            const uploadToS3 = new PutObjectCommand({
                Bucket: BUCKET,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype
            });
            try{
                const uploadResult = await s3.send(uploadToS3)
                console.log('File uploaded successfully', uploadResult);
                body.plantPhoto = `https://mybotanic.s3.ap-southeast-2.amazonaws.com/${key}`;
            } catch(error){
                console.log(error);
                return res.status(500).send('Error uploading file');
            }

        }


        plantCollection.plants.push(body)
        await plantCollection.save();

        res.render('plantCollections/show', { plantCollection })
    } catch (err) {
        console.error(err)
    }
}

async function show(req, res) {
    try {
        console.log("this is req.params.id", req.params.id)
        const plantCollection = await PlantCollection.findOne({ 'plants._id': req.params.id })
        if (plantCollection) {
            const plant = plantCollection.plants.id(req.params.id);
            console.log("this is plant", plant);
            res.render('plants/show', {plant});
        } else {
            console.log("Plant not found");
        }
        
    } catch (error) {
        console.error('Error fetching plant:', error);
    }
}

