let slideindx = 0;
const slides = document.getElementById('slider');

function showSlide(index) {
    const slidesCount = document.querySelectorAll('.slide').length;
    if (index >= slidesCount) {
        slideindx = 0;
    } else if (index < 0) {
        slideindx = slidesCount - 1;
    } else {
        slideindx = index;
    }
    slides.style.transform = `translateX(${-slideindx * 800}px)`;
}

function next() {
    showSlide(slideindx + 1);
}

function prev() {
    showSlide(slideindx - 1);
}
