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
        // grab image in button
        var projectimage = this.querySelector("img").src;
        
        // print to console
        console.log("Project ID: " + projectid);
        console.log("Project Image: " + projectimage);
        projectPopup(projectid, projectimage);

	});
});

closeButton.addEventListener("click", closeProjectPopup);


function projectPopup(projectid , projectimage) {
    projectPopupDisplay.style.display = "block";
    document.getElementById("projectPopupImage").src = projectimage;

    if (projectid === "3Air_Eukaryot") {
        document.querySelector(".projectDescription").innerText = "By Eukaryot";
        document.getElementById("projectPromo").src = "Resources/3rdParty/3air.png";
        document.getElementById("projectDesc").innerText = "Sonic 3 A.I.R. is a fan project aimed at making an accurate, reverse-engineered PC port of Sonic 3 & Knuckles. It includes a number of graphical improvements such as 16:9 widescreen (can be changed back to 4:3 or other aspect ratios; see Ultra-widescreen), consistent frame rate, 60 FPS in special stages, smooth sprite rotation, and mod support.";
        document.getElementById("whoEnvolved").innerText = "This project is a big insperation for our projects, go check it out!";
        document.getElementById("projectSiteLink").href = "https://sonic3air.org/";
        document.getElementById("projectSiteLink").innerText = "Project Site";
        document.getElementById("projectSocialLink").href = "https://bsky.app/profile/eukaryot.bsky.social";
        document.getElementById("projectSocialLink").innerText = "Bluesky";
    }
    if (projectid === "DuelofFates_ChaosDriveStudio") {
        document.querySelector(".projectDescription").innerText = "By Chaos Drive Studio";
        document.getElementById("projectPromo").src = "Resources/3rdParty/DoF.png";
        document.getElementById("projectDesc").innerText = "Sonic and the Duel of Fates is a 2D platformer built using the Retro Engine V4 Decompilation, featuring original sprites, levels, badniks, and an original soundtrack. The game follows Sonic and Shadow as they team up to stop a new threat to the world.";
        document.getElementById("whoEnvolved").innerText = "Led by ProdNW, Chaos Drive Studio includes members and contributions from Team Forever from the likes of AlyStyle and Jamesith!";
        document.getElementById("projectSiteLink").href = "https://chaosdrivestudio.com/sonic-and-the-duel-of-fates/";
        document.getElementById("projectSiteLink").innerText = "Project Site";
        document.getElementById("projectSocialLink").href = "https://bsky.app/profile/prodnw.bsky.social";
        document.getElementById("projectSocialLink").innerText = "ProdNW on Bluesky";
    }
    if (projectid === "Essence_TeamReDream") {
        document.querySelector(".projectDescription").innerText = "By Team ReDream";
        document.getElementById("projectPromo").src = "Resources/3rdParty/Essence.jpg";
        document.getElementById("projectDesc").innerText = "Sonic Essence is an original 2D Modern Sonic adventure built with the Retro Engine V4 Decompilation. It features completely original sprites, levels, badniks, and an original soundtrack! This project aims to push the potential of Retro Engine (V4) modding to show the fresh and new experiences the decompilation can offer!";
        document.getElementById("whoEnvolved").innerText = "Led by AlyStyle, Team ReDream includes members and contributions from Team Forever from the likes of Casteor573, Elspeth The Pict, KarlEmerald, Jamesith, and ProdNW!";
        document.getElementById("projectSiteLink").href = "https://www.youtube.com/@TeamReDream";
        document.getElementById("projectSiteLink").innerText = "Youtube";
        document.getElementById("projectSocialLink").href = "https://bsky.app/profile/teamredream.bsky.social";
        document.getElementById("projectSocialLink").innerText = "Bluesky";
    }
    if (projectid === "ManiaAddendum_KiaraGale") {
        document.querySelector(".projectDescription").innerText = "By Kiara Gale";
        document.getElementById("projectPromo").src = "Resources/Logos/3rdParty/ManiaAddendum_KiaraGale.png";
        document.getElementById("projectDesc").innerText = "";
        document.getElementById("whoEnvolved").innerText = "";
        document.getElementById("projectSiteLink").href = "";
        document.getElementById("projectSiteLink").innerText = "";
        document.getElementById("projectSocialLink").href = "";
        document.getElementById("projectSocialLink").innerText = "";
    }
    if (projectid === "OriginsUltrafix_TeamUltrafix") {
        document.querySelector(".projectDescription").innerText = "By Team Ultrafix";
        document.getElementById("projectPromo").src = "Resources/3rdParty/ultrafix.png";
        document.getElementById("projectDesc").innerText = "Sonic Origins Ultrafix is a mod that changes, fixes and adds to various parts of the collection (including its games, the collection menus, and all the other side modes) to bring you the ultimate Origins experience!";
        document.getElementById("whoEnvolved").innerText = "Both Cosmic Eterntiy and AlyStyle are apart of both teams, and both teams have contributed to each other's projects in the past!";
        document.getElementById("projectSiteLink").href = "https://www.youtube.com/@TeamUltrafix";
        document.getElementById("projectSiteLink").innerText = "Youtube";
        document.getElementById("projectSocialLink").href = "https://bsky.app/profile/teamultrafix.bsky.social";
        document.getElementById("projectSocialLink").innerText = "Bluesky";
    }
}

function closeProjectPopup() {
    projectPopupDisplay.style.display = "none";
}



