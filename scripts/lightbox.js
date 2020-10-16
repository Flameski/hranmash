//jshint esversion:6

let imgType = "";
var thumbnailNum = 0;

for (let el of document.querySelectorAll('.img-fluid')) {
    el.addEventListener('click', openModal);
}

function openModal() {
    let currImg = this.src.toString();
    currImgNum = currImg.charAt(currImg.length - 5);

    if (this.classList.contains('equipment')) {
        imgType = 'equipment';
    } else if (this.classList.contains('machines')) {
        imgType = 'machines';
    } else if (this.classList.contains('projects')) {
        imgType = 'projects';
    } else if (this.classList.contains('diagram')) {
        imgType = 'diagram';
    }

    let thumbnailsDiv = document.querySelector('.thumbnails');
    let thumbnail = '';

    switch (imgType) {
        case 'equipment':
        case 'machines':
            thumbnailNum = 14;
            break;
        case 'projects':
            thumbnailNum = 8;
            break;
        case 'diagram':
            thumbnailNum = 5;
            break;
        default:
            break;
    }
    for (let i = 1; i <= thumbnailNum; i++) {
        thumbnail += `<img class="thumb-img" src="/images/${imgType}-${i}.jpg">`;
    }
    thumbnailsDiv.innerHTML = thumbnail;

    document.querySelector('.modal').style.display = "block";
    displayBigImg();


    for (let el of document.querySelectorAll('.thumb-img')) {
        el.addEventListener('click', function () {
            currImg = this.src.toString();
            currImgNum = currImg.charAt(currImg.length - 5);
            currImgNum = Number(currImgNum);
            currImgNum2 = currImg.charAt(currImg.length - 6);
            if (isNaN(currImgNum2)) {
                bigImg = `/images/${imgType}-${currImgNum}.jpg`;
            } else {
                bigImg = `/images/${imgType}-${currImgNum + 10}.jpg`;
            }
            document.querySelector('#modal-img').src = bigImg;
        });
    }
}

function displayBigImg() {
    let bigImg = `/images/${imgType}-${currImgNum}.jpg`;
    document.querySelector('#modal-img').src = bigImg;
}

function plusSlide(num) {
    if (num > 0) {
        currImgNum++;
    } else {
        currImgNum--;
    }
    if (currImgNum < 1) {
        currImgNum = thumbnailNum;
    }
    if (currImgNum > thumbnailNum) {
        currImgNum = 1;
    }
    displayBigImg();
}

function closeModal() {
    document.querySelector('.modal').style.display = "none";
}

let modalWindow = document.querySelector('.modal');
modalWindow.addEventListener('click', (e) => {
    if (e.target == modalWindow) {
        modalWindow.style.display = 'none';
        //e.stopPropagation();
    }
});