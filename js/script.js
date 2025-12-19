const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 500);
        console.log(intervalId);
    }


}

function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
}

function prevSlide(){

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}