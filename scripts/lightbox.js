// Open the Modal
function openEqModal() {
    document.getElementById("equipment-modal").style.display = "block";
}

// Close the Modal
function closeEqModal() {
    document.getElementById("equipment-modal").style.display = "none";
}

let eqSlideIndex = 1;
showEqSlides(eqSlideIndex);

// Next/previous controls
function plusEqSlides(n) {
    showEqSlides(eqSlideIndex += n);
}

// Thumbnail image controls
function currentEqSlide(n) {
    showEqSlides(eqSlideIndex = n);
}

function showEqSlides(n) {
    let i;
    let slides = document.getElementsByClassName("equipment-slide");
    let dots = document.getElementsByClassName("equipment-img");
    if (n > slides.length) {
        eqSlideIndex = 1;
    }
    if (n < 1) {
        eqSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[eqSlideIndex - 1].style.display = "block";
    dots[eqSlideIndex - 1].className += " active";
}

/* Machines */

// Open the Modal
function openMaModal() {
    document.getElementById("machines-modal").style.display = "block";
}

// Close the Modal
function closeMaModal() {
    document.getElementById("machines-modal").style.display = "none";
}

let maSlideIndex = 1;
showMaSlides(maSlideIndex);

// Next/previous controls
function plusMaSlides(n) {
    showMaSlides(maSlideIndex += n);
}

// Thumbnail image controls
function currentMaSlide(n) {
    showMaSlides(maSlideIndex = n);
}

function showMaSlides(n) {
    let i;
    let slides = document.getElementsByClassName("machines-slide");
    let dots = document.getElementsByClassName("machines-img");
    if (n > slides.length) {
        maSlideIndex = 1;
    }
    if (n < 1) {
        maSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[maSlideIndex - 1].style.display = "block";
    dots[maSlideIndex - 1].className += " active";
}

/* Projects */

// Open the Modal
function openPrModal() {
    document.getElementById("projects-modal").style.display = "block";
}

// Close the Modal
function closePrModal() {
    document.getElementById("projects-modal").style.display = "none";
}

let prSlideIndex = 1;
showPrSlides(prSlideIndex);

// Next/previous controls
function plusPrSlides(n) {
    showPrSlides(prSlideIndex += n);
}

// Thumbnail image controls
function currentPrSlide(n) {
    showPrSlides(prSlideIndex = n);
}

function showPrSlides(n) {
    let i;
    let slides = document.getElementsByClassName("projects-slide");
    let dots = document.getElementsByClassName("projects-img");
    if (n > slides.length) {
        prSlideIndex = 1;
    }
    if (n < 1) {
        prSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[prSlideIndex - 1].style.display = "block";
    dots[prSlideIndex - 1].className += " active";
}

/* Diagrams */

// Open the Modal
function openDgModal() {
    document.getElementById("diagram-modal").style.display = "block";
}

// Close the Modal
function closeDgModal() {
    document.getElementById("diagram-modal").style.display = "none";
}

let dgSlideIndex = 1;
showDgSlides(dgSlideIndex);

// Next/previous controls
function plusDgSlides(n) {
    showDgSlides(dgSlideIndex += n);
}

// Thumbnail image controls
function currentDgSlide(n) {
    showDgSlides(dgSlideIndex = n);
}

function showDgSlides(n) {
    let i;
    let slides = document.getElementsByClassName("diagram-slide");
    let dots = document.getElementsByClassName("diagram-img");
    if (n > slides.length) {
        dgSlideIndex = 1;
    }
    if (n < 1) {
        dgSlideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[dgSlideIndex - 1].style.display = "block";
    dots[dgSlideIndex - 1].className += " active";
}

window.addEventListener('keydown', event => {
    if (event.keyCode == 27) {
        closeEqModal();
        closeMaModal();
        closePrModal();
        closeDgModal();
    }
});