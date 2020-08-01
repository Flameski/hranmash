var modal = document.getElementById("modal-gallery-img");
var img = document.querySelectorAll('.modal-gallery');
var modalImg = document.getElementById("img01");

for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
modal.onclick = function () {
    modal.style.display = "none";
}