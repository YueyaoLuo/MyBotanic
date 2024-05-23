// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById("myModal");


    var btn = document.getElementById("createBtn");

    //   get HTMLcollection so need to use index 0 get the first and the only element
    var span = document.getElementsByClassName("close")[0];


    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
