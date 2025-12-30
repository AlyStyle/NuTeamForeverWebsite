document.addEventListener("DOMContentLoaded", initializeSlider);


var projectPopupDisplay = document.querySelector(".projectPopupDisplay");

const closeButton = document.getElementById("closeButton")
const slides = document.querySelectorAll(".slides img");
const closeBtn = document.getElementById("closeButton");

//project popup variables
const projectPopupImage = document.getElementById("projectPopupImage");

const projectDescription = document.querySelector(".projectDescription");
const projectPromo = document.getElementById("projectPromo");
const projectDesc = document.getElementById("projectDesc");
const whoEnvolved = document.getElementById("whoEnvolved");
const projectSiteLink = document.getElementById("projectSiteLink");
const projectSocialLink = document.getElementById("projectSocialLink");

let slideIndex = 0;
let intervalId = null;

//mobile menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".navLink");

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
  if (!container) return;
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

// project popup code for text and images
function projectPopup(projectid , projectimage) {
    projectPopupImage.src = projectimage;

    if (projectid === "3Air_Eukaryot") {
        projectDescription.innerText = "By Eukaryot";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/3AIR.png";
        projectDesc.innerText = "Sonic 3 A.I.R. is a fan project aimed at making an accurate, reverse-engineered PC port of Sonic 3 & Knuckles. It includes a number of graphical improvements such as 16:9 widescreen (can be changed back to 4:3 or other aspect ratios; see Ultra-widescreen), consistent frame rate, 60 FPS in special stages, smooth sprite rotation, and mod support.";
        whoEnvolved.innerText = "This project is a big insperation for our projects, go check it out!";
        projectSiteLink.href = "https://sonic3air.org/";
        projectSiteLink.innerText = "Project Site";
        projectSocialLink.href = "https://bsky.app/profile/eukaryot.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "DuelofFates_ChaosDriveStudio") {
        projectDescription.innerText = "By Chaos Drive Studio";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/DoF.png";
        projectDesc.innerText = "Sonic and the Duel of Fates is a 2D platformer built using the Retro Engine V4 Decompilation, featuring original sprites, levels, badniks, and an original soundtrack. The game follows Sonic and Shadow as they team up to stop a new threat to the world.";
        whoEnvolved.innerText = "Led by ProdNW, Chaos Drive Studio includes members and contributions from Team Forever from the likes of AlyStyle and Jamesith!";
        projectSiteLink.href = "https://chaosdrivestudio.com/sonic-and-the-duel-of-fates/";
        projectSiteLink.innerText = "Project Site";
        projectSocialLink.href = "https://bsky.app/profile/prodnw.bsky.social";
        projectSocialLink.innerText = "ProdNW on Bluesky";
    }
    if (projectid === "Essence_TeamReDream") {
        projectDescription.innerText = "By Team ReDream";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/Essence.jpg";
        projectDesc.innerText = "Sonic Essence is an original 2D Modern Sonic adventure built with the Retro Engine V4 Decompilation. It features completely original sprites, levels, badniks, and an original soundtrack! This project aims to push the potential of Retro Engine (V4) modding to show the fresh and new experiences the decompilation can offer!";
        whoEnvolved.innerText = "Led by AlyStyle, Team ReDream includes members and contributions from Team Forever from the likes of Casteor573, Elspeth The Pict, KarlEmerald, Jamesith, and ProdNW!";
        projectSiteLink.href = "https://www.youtube.com/@TeamReDream";
        projectSiteLink.innerText = "Youtube";
        projectSocialLink.href = "https://bsky.app/profile/teamredream.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "ManiaAddendum_KiaraGale") {
        projectDescription.innerText = "By Kiara Gale";
        projectPromo.src = "Resources/Logos/3rdParty/ManiaAddendum_KiaraGale.png";
        projectDesc.innerText = "";
        whoEnvolved.innerText = "";
        projectSiteLink.href = "";
        projectSiteLink.innerText = "";
        projectSocialLink.href = "";
        projectSocialLink.innerText = "";
    }
    if (projectid === "OriginsUltrafix_TeamUltrafix") {
        projectDescription.innerText = "By Team Ultrafix";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/Ultrafix.png";
        projectDesc.innerText = "Sonic Origins Ultrafix is a mod that changes, fixes and adds to various parts of the collection (including its games, the collection menus, and all the other side modes) to bring you the ultimate Origins experience!";
        whoEnvolved.innerText = "Both Cosmic Eterntiy and AlyStyle lead both teams, as well as both teams have contributed to each other's projects in the past!";
        projectSiteLink.href = "https://www.youtube.com/@TeamUltrafix";
        projectSiteLink.innerText = "Youtube";
        projectSocialLink.href = "https://bsky.app/profile/teamultrafix.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "SonicStrangeDreamWorld"){
        projectDescription.innerText = "";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/SDW.jpg";
        projectDesc.innerText = "Strange Dream World is a reimagine of Sonic 1 with new graphics, colors, and layouts. Sonic is reliving his first adventure but in a different way than he remember. A colorful like but in a strange way, like a dream?? Where colors are different and badniks are more scarier than ever?! That's not how Sonic remember South Island like that! Could that mean Dr. Eggman be up to no good again? Guide Sonic in this new dream world adventure where anything can happen!";
        whoEnvolved.innerText = "A mod by DarkVampireDude, one of Team Forever's artists!";
        projectSiteLink.href = "https://gamebanana.com/mods/150213";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://discord.gg/ncvAR4WStr";
        projectSocialLink.innerText = "Discord";
    }
}

function closeProjectPopup() {
    projectPopupDisplay.classList.remove("active");
}

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

        projectPopupDisplay.classList.add("active");

	});
});

if (closeButton) closeButton.addEventListener("click", closeProjectPopup);
if (projectPopupDisplay) projectPopupDisplay.addEventListener("click", function(event) {
    if (event.target === projectPopupDisplay) {
        closeProjectPopup();
    }
});

//hamburger menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
});

navLink.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector(".menu-overlay").classList.remove("active");
}))

document.querySelector(".menu-overlay").addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector(".menu-overlay").classList.remove("active");
});

function changeRSDKImage() {
    const v3Img = document.getElementById('v3');
    if (v3Img) {
       if (window.innerWidth <= 1268) {
           v3Img.src = 'Resources/About/v3Logo_Mobile.svg';
       } else {
           v3Img.src = 'Resources/About/v3Logo.png';
       }
    }

    const v4Img = document.getElementById('v4');
    if (v4Img) {
       if (window.innerWidth <= 1268) {
           v4Img.src = 'Resources/About/v4Logo_Mobile.svg';
       } else {
           v4Img.src = 'Resources/About/v4Logo.png';
       }
    }
}

document.addEventListener("DOMContentLoaded", changeRSDKImage);
window.addEventListener('resize', changeRSDKImage);