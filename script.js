// Event Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Proshows Slideshow
let proshowIndex = 0;
showProshow(proshowIndex);

function plusSlides(n) {
    showProshow(proshowIndex += n);
}

function showProshow(n) {
    let i;
    let slides = document.getElementsByClassName("proshow-slide");
    let texts = document.getElementsByClassName("proshow-text");
    if (n >= slides.length) {proshowIndex = 0}
    if (n < 0) {proshowIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        texts[i].style.display = "none";
    }
    slides[proshowIndex].style.display = "block";
    texts[proshowIndex].style.display = "block";
}

document.querySelector(".left").addEventListener("click", function() {
    plusSlides(-1);
});

document.querySelector(".right").addEventListener("click", function() {
    plusSlides(1);
});
