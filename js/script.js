const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if (slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
        console.log(intervalId);
    }


}

function showSlide(index){

    

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
    slideIndex--;
    showSlide(slideIndex);
    
}

function nextSlide(){
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
    slideIndex++;
    showSlide(slideIndex);
}

async function loadPosts() {
  const res = await fetch(
    "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=teamforever.bsky.social&limit=10"
  );
  const data = await res.json();

  const container = document.getElementById("posts");

  data.feed.forEach(item => {
    const post = document.createElement("article");

    // text
    const text = document.createElement("p");
    text.textContent = item.post.record.text;
    post.appendChild(text);

    // images
    const embed = item.post.embed;
    if (embed?.images) {
      embed.images.forEach(img => {
        const image = document.createElement("img");
        image.src = img.thumb || img.fullsize;
        image.style.maxWidth = "100%";
        post.appendChild(image);
      });
    }

    container.appendChild(post);
  });
}

loadPosts();