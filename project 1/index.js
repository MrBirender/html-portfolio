let slideIndex = 0;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    let indicators = document.getElementsByClassName("indicator");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        indicators[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");
    indicators[slideIndex].classList.add("active");
}

// Initialize the carousel
showSlides(slideIndex);
