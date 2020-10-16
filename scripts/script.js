//jshint esversion:6

let menuBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 991) {
        menuBar.style.height = '56px';
        if (window.scrollY >= 100) {
            menuBar.style.height = '35px';
        } else if (window.scrollY === 0) {
            menuBar.style.height = '56px';
        }
    }
});