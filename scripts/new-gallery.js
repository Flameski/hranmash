let images = [...document.querySelectorAll('.filtec-image')];
let closeBtn = document.querySelector('.close');
let modalImg = document.querySelector('#modal-img')
let btnPrev = document.querySelector('.prev')
let btnNext = document.querySelector('.next')

images.forEach(image => {
    image.addEventListener('click', onImgClick)
})

function onImgClick(e) {
    let image = e.target.dataset.image;
    openImage(image)
}

function openImage(image) {
    document.querySelector('.modal').style.display = "block";
    modalImg.src = `/images/filtec-${image}.jpg`
    modalImg.dataset.image = image;
}

closeBtn.addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
})

btnPrev.addEventListener('click', () => {
    let currentImg = parseInt(modalImg.dataset.image)
    let prevImg = currentImg - 1;
    if(currentImg === 1) {
        prevImg = images.length;
    }
    openImage(prevImg)
})

btnNext.addEventListener('click', () => {
    let currentImg = parseInt(modalImg.dataset.image)
    let nextImg = currentImg + 1;
    if(currentImg === images.length) {
        nextImg = 1;
    }
    openImage(nextImg)
})

window.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth < 500) {
        images.forEach(image => {
            if(image.dataset.image != 1) {
                image.style.display = "none"
            }
        })
    }
})