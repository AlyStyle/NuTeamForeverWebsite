var projectPopupDisplay = document.querySelector(".projectPopupDisplay");
const closeButton = document.getElementById("closeButton")
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
    "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=teamforever.bsky.social&limit=10&filter=posts_no_replies"
  );
  const data = await res.json();

  const container = document.getElementById("posts");
  container.innerHTML = ""; // optional reset

  data.feed.forEach(item => {
    const post = document.createElement("blockquote");

    post.className = "bluesky-embed";
    post.setAttribute("data-bluesky-uri", item.post.uri);
    post.setAttribute("data-bluesky-cid", item.post.cid);
    post.setAttribute("data-bluesky-embed-color-mode", "white");

    container.appendChild(post);
  });

  loadBlueskyEmbed();
}

function loadBlueskyEmbed() {
  // If script already exists, just re-process embeds
  if (window.bskyEmbedLoaded) {
    if (window.bskyEmbed?.load) {
      window.bskyEmbed.load();
    }
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://embed.bsky.app/static/embed.js";
  script.charset = "utf-8";

  script.onload = () => {
    window.bskyEmbedLoaded = true;
  };

  document.body.appendChild(script);
}
loadPosts();

document.querySelectorAll(".projectInfo").forEach(function (button) {
	button.addEventListener("click", function () {
        // Retrieving attributes from the clicked button
        var projectid = this.getAttribute("projectid");
        // print to console
        console.log("Project ID: " + projectid);
        projectPopup(projectid);

	});
});

closeButton.addEventListener("click", closeProjectPopup);


function projectPopup(projectid) {
    projectPopupDisplay.style.display = "block";
}

function closeProjectPopup() {
    projectPopupDisplay.style.display = "none";
}



