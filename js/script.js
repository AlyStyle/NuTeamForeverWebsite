document.addEventListener("DOMContentLoaded", initializeSlider);


var projectPopupDisplay = document.querySelector(".projectPopupDisplay");

const closeButton = document.getElementById("closeButton")
const slides = document.querySelectorAll(".slides img");
const closeBtn = document.getElementById("closeButton");

//project popup variables
const projectPopupImage = document.getElementById("projectPopupImage");

const projectAuthor = document.querySelector(".projectAuthor");
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
        projectAuthor.innerText = "By Eukaryot";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/3AIR.png";
        projectDesc.innerText = "Sonic 3 A.I.R. is a fan project aimed at making an accurate, reverse-engineered PC port of Sonic 3 & Knuckles. It includes a number of graphical improvements such as 16:9 widescreen (can be changed back to 4:3 or other aspect ratios; see Ultra-widescreen), consistent frame rate, 60 FPS in special stages, smooth sprite rotation, and mod support.";
        whoEnvolved.innerText = "This project is a big insperation for our projects, go check it out!";
        projectSiteLink.href = "https://sonic3air.org/";
        projectSiteLink.innerText = "Project Site";
        projectSocialLink.href = "https://bsky.app/profile/eukaryot.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "DuelofFates_ChaosDriveStudio") {
        projectAuthor.innerText = "By Chaos Drive Studio";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/DoF.png";
        projectDesc.innerText = "Sonic and the Duel of Fates is a 2D platformer built using the Retro Engine V4 Decompilation, featuring original sprites, levels, badniks, and an original soundtrack. The game follows Sonic and Shadow as they team up to stop a new threat to the world.";
        whoEnvolved.innerText = "Led by ProdNW, Chaos Drive Studio includes members and contributions from Team Forever from the likes of AlyStyle and Jamesith!";
        projectSiteLink.href = "https://chaosdrivestudio.com/sonic-and-the-duel-of-fates/";
        projectSiteLink.innerText = "Project Site";
        projectSocialLink.href = "https://bsky.app/profile/prodnw.bsky.social";
        projectSocialLink.innerText = "ProdNW on Bluesky";
    }
    if (projectid === "Essence_TeamReDream") {
        projectAuthor.innerText = "By Team ReDream";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/Essence.jpg";
        projectDesc.innerText = "Sonic Essence is an original 2D Modern Sonic adventure built with the Retro Engine V4 Decompilation. It features completely original sprites, levels, badniks, and an original soundtrack! This project aims to push the potential of Retro Engine (V4) modding to show the fresh and new experiences the decompilation can offer!";
        whoEnvolved.innerText = "Led by AlyStyle, Team ReDream includes members and contributions from Team Forever from the likes of Casteor573, Elspeth The Pict, KarlEmerald, Jamesith, and ProdNW!";
        projectSiteLink.href = "https://www.youtube.com/@TeamReDream";
        projectSiteLink.innerText = "Youtube";
        projectSocialLink.href = "https://bsky.app/profile/teamredream.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "ManiaAddendum_KiaraGale") {
        projectAuthor.innerText = "By Kiara Gale";
        projectPromo.src = "Resources/Logos/3rdParty/ManiaAddendum_KiaraGale.png";
        projectDesc.innerText = "";
        whoEnvolved.innerText = "";
        projectSiteLink.href = "";
        projectSiteLink.innerText = "";
        projectSocialLink.href = "";
        projectSocialLink.innerText = "";
    }
    if (projectid === "OriginsUltrafix_TeamUltrafix") {
        projectAuthor.innerText = "By Team Ultrafix";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/Ultrafix.png";
        projectDesc.innerText = "Sonic Origins Ultrafix is a mod that changes, fixes and adds to various parts of the collection (including its games, the collection menus, and all the other side modes) to bring you the ultimate Origins experience!";
        whoEnvolved.innerText = "Both Cosmic Eterntiy and AlyStyle lead both teams, as well as both teams have contributed to each other's projects in the past!";
        projectSiteLink.href = "https://www.youtube.com/@TeamUltrafix";
        projectSiteLink.innerText = "Youtube";
        projectSocialLink.href = "https://bsky.app/profile/teamultrafix.bsky.social";
        projectSocialLink.innerText = "Bluesky";
    }
    if (projectid === "SonicStrangeDreamWorld"){
        projectAuthor.innerText = "by DarkVampireDude";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/SDW.jpg";
        projectDesc.innerText = "Strange Dream World is a reimagine of Sonic 1 with new graphics, colors, and layouts. Sonic is reliving his first adventure but in a different way than he remember. A colorful like but in a strange way, like a dream?? Where colors are different and badniks are more scarier than ever?! That's not how Sonic remember South Island like that! Could that mean Dr. Eggman be up to no good again? Guide Sonic in this new dream world adventure where anything can happen!";
        whoEnvolved.innerText = "A mod by DarkVampireDude, one of Team Forever's artists!";
        projectSiteLink.href = "https://gamebanana.com/mods/150213";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://discord.gg/ncvAR4WStr";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "AmyGalore"){
        projectAuthor.innerText = "by Team Galore";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/AmyGalore.png";
        projectDesc.innerText = "Sonic 3 AIR's most customizable version of Amy Rose, brought to the scene by Team Galore! Many sprite styles, many movesets, and so much more packed into a single mod!";
        whoEnvolved.innerText = "Some members of Team Forever have contributed to this mod, including AlyStyle and nabbup, and we are also personally big fans of the team's work!";
        projectSiteLink.href = "";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "MetalMadness"){
        projectAuthor.innerText = "by Team Galore";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/MetalMadness.png";
        projectDesc.innerText = "Team Galore's Metal Sonic brings him to limelight! Customize his paintjob and abilities to make the most out of his Angel Island simulation.";
        whoEnvolved.innerText = "Some members of Team Forever have contributed to this mod, including AlyStyle and nabbup, and we are also personally big fans of the team's work!";
        projectSiteLink.href = "";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "DuoMania"){
        projectAuthor.innerText = "by Team Galore";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/DuoMania.png";
        projectDesc.innerText = "Mighty and Ray come back to Angel Island after their time in Sonic Mania Plus to have fun! Team Galore's take on the duo brings customizable movesets inspired by different fangames and non-Sonic games for Mighty and Ray!";
        whoEnvolved.innerText = "Some members of Team Forever have contributed to this mod, including AlyStyle and nabbup, and we are also personally big fans of the team's work!";
        projectSiteLink.href = "";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "MarioMayhem"){
        projectAuthor.innerText = "by Team Galore";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/MarioMayhem.png";
        projectDesc.innerText = "Team Galore bring Mario and Luigi to Angel Island with gameplay as close to real Mario as it can get! Traverse through the original environments with all-new gameplay and mechanics pulled from the Mario series, using existing mechanics with the plumbers' arsenal to work your way around the game!";
        whoEnvolved.innerText = "Some members of Team Forever have contributed to this mod, including AlyStyle and nabbup, and we are also personally big fans of the team's work!";
        projectSiteLink.href = "";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "";
        projectSocialLink.innerText = "Discord";
    }
    if (projectid === "HorrorPack"){
        projectAuthor.innerText = "by Casteor573";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/HorrorPack.jpg";
        projectDesc.innerText = "The S1F Horror Pack is a horror mod combines two of my previous mods Slenderman in S1F and FNAF in S1F into one pack! Also adds some new content too.";
        whoEnvolved.innerText = "Created by Casteor573, this project also features contributions from other Team Forever members from the likes of AlyStyle, KarlEmerald, MattM4nia, and WorksOfMagic!";
        projectSiteLink.href = "https://gamebanana.com/mods/635073";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "https://youtu.be/bx4IWyDeXF0";
        projectSocialLink.innerText = "Trailer";      
    }
    if (projectid === "SMBR"){
        projectAuthor.innerText = "by ???";
        projectPromo.src = "Resources/Home/ThirdParty/Thumbnails/SMBR.png";
        projectDesc.innerText = "";
        whoEnvolved.innerText = "";
        projectSiteLink.href = "";
        projectSiteLink.innerText = "Download";
        projectSocialLink.href = "";
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

document.querySelectorAll(".projectInfo-Alt").forEach(function (button) {
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

const group = document.getElementById("logoGroup");
if (group) {
    const items = Array.from(group.children);

    if (group.getAttribute("data-random") !== "noRandom") {
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
    }

    group.innerHTML = "";
    items.forEach(item => group.appendChild(item));

    items.forEach(item => {
    const clone = item.cloneNode(true);
    group.appendChild(clone);
    });

    let offset = 0;
    let speed = 0;
    let maxSpeed = 10;
    const acceleration = 0.5;
    let hovering = false;

    function scrollLoop() {
        const isPopupVisible = projectPopupDisplay && projectPopupDisplay.classList.contains("active");

        const paused = hovering || isPopupVisible;

        if (!paused) {
            speed = Math.min(speed + acceleration, maxSpeed);
        } else {
            speed = Math.max(speed - acceleration, 0);
        }

        offset -= speed;

        if (Math.abs(offset) >= group.scrollWidth / 2) {
            offset = 0;
        }
        group.style.transform = `translate3d(${offset}px, 0, 0)`;

        requestAnimationFrame(scrollLoop);
    }
    scrollLoop();

    group.parentElement.addEventListener("mouseenter", () => {
        hovering = true;
    });
    group.parentElement.addEventListener("mouseleave", () => {
        hovering = false;
    });
}



const filterButton1F = document.getElementById('filter-1F');
const filterButton2A = document.getElementById('filter-2A');
const filterButtonANATC = document.getElementById('filter-ANATC');
const filterButtonCDi = document.getElementById('filter-CDi');

let filterImg1F;
let filterImg2A;
let filterImgANATC;
let filterImgCDi;

if (filterButton1F) {
    filterImg1F = filterButton1F.querySelector('img');

    filterButton1F.addEventListener('click', (e) => {
        if (filterImg1F.src.includes('1F_Unselected.png')) {
            filterImg1F.src = 'Resources/Community/1F_Selected.png';
            filterImg2A.src = 'Resources/Community/2A_Unselected.png';
            filterImgANATC.src = 'Resources/Community/ANATC_Unselected.png';
            filterImgCDi.src = 'Resources/Community/CDi_Unselected.png';
        }
        loadMods();
    });
}

if (filterButton2A) {
    filterImg2A = filterButton2A.querySelector('img');

    filterButton2A.addEventListener('click', (e) => {
        if (filterImg2A.src.includes('2A_Unselected.png')) {
            filterImg1F.src = 'Resources/Community/1F_Unselected.png';
            filterImg2A.src = 'Resources/Community/2A_Selected.png';
            filterImgANATC.src = 'Resources/Community/ANATC_Unselected.png';
            filterImgCDi.src = 'Resources/Community/CDi_Unselected.png';
        }
        loadMods();
    });
}

if (filterButtonANATC) {
    filterImgANATC = filterButtonANATC.querySelector('img');

    filterButtonANATC.addEventListener('click', (e) => {
        if (filterImgANATC.src.includes('ANATC_Unselected.png')) {
            filterImg1F.src = 'Resources/Community/1F_Unselected.png';
            filterImg2A.src = 'Resources/Community/2A_Unselected.png';
            filterImgANATC.src = 'Resources/Community/ANATC_Selected.png';
            filterImgCDi.src = 'Resources/Community/CDi_Unselected.png';
        }
        loadMods();
    });
}

if (filterButtonCDi) {
    filterImgCDi = filterButtonCDi.querySelector('img');

    filterButtonCDi.addEventListener('click', (e) => {
        if (filterImgCDi.src.includes('CDi_Unselected.png')) {
            filterImg1F.src = 'Resources/Community/1F_Unselected.png';
            filterImg2A.src = 'Resources/Community/2A_Unselected.png';
            filterImgANATC.src = 'Resources/Community/ANATC_Unselected.png';
            filterImgCDi.src = 'Resources/Community/CDi_Selected.png';
        }
        loadMods();
    });
}


async function loadMods() {
    let projecttag = "";

    if (filterImg1F.src.includes("1F_Selected.png")) {
        projecttag = "10601";
    }
    if (filterImg2A.src.includes("2A_Selected.png")) {
        projecttag = "15019";
    }
    if (filterImgANATC.src.includes("ANATC_Selected.png")) {
        projecttag = "15780";
    }
    if (filterImgCDi.src.includes("CDi_Selected.png")) {
        projecttag = "6108";
    }

    /* Due to the general scuffed nature of GameBanana's API, This code here was written with AI-Assistance. I hope to one day redo this code completely */
    const res = await fetch("https://api.gamebanana.com/Rss/Featured?gameid=" + projecttag);
    const xmlText = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");
    const items = xml.querySelectorAll("items > item");
    const container = document.getElementById("featuredMods");
    
    const res2 = await fetch("https://api.gamebanana.com/Rss/New?gameid=" + projecttag);
    const xmlText2 = await res2.text();
    const xml2 = parser.parseFromString(xmlText2, "application/xml");   
    const items2 = xml2.querySelectorAll("items > item");
    const container2 = document.getElementById("newestMods");
    /* The code below is now written by me again */

    container.innerHTML = "";
    container2.innerHTML = "";

    if (items.length === 0) {
        container2.innerHTML = "<p>The Gamebannana API is rate-limited. Please check back later...</p>";
    } else {
        items.forEach(item => {
            const title = item.querySelector("title")?.textContent;
            const link = item.querySelector("link")?.textContent;
            let image = item.querySelector("image")?.textContent.trim();
                image = image.replace("/ss/Mod/", "/ss/mods/");
                image = image.replace("/ss/Wip/", "/ss/wips/");
                image = image.replace("/ss/Tutorial/", "/ss/tuts/");
                image = image.replace("/ss/Project/", "/ss/projects/");
                image = image.replace("/ss/Concept/", "/ss/concepts/");

            const card = document.createElement("div");
            card.className = "featured-mod";

            card.innerHTML = `
                <a href="${link}" target="_blank">
                    <img src="${image}" alt="${title}">
                </a>
                <h3>${title}</h3>
            `;

            container.appendChild(card);
        });
    }

    if (items2.length === 0) {
        container2.innerHTML = "<p>The Gamebannana API is rate-limited. Please check back later...</p>";
    } else {
        items2.forEach(item => {
            const title = item.querySelector("title")?.textContent;
            const link = item.querySelector("link")?.textContent;
            let image = item.querySelector("image")?.textContent.trim();
                image = image.replace("/ss/Mod/", "/ss/mods/");
                image = image.replace("/ss/Wip/", "/ss/wips/");
                image = image.replace("/ss/Tutorial/", "/ss/tuts/");
                image = image.replace("/ss/Project/", "/ss/projects/");
                image = image.replace("/ss/Concept/", "/ss/concepts/");

            const card = document.createElement("div");
            card.className = "featured-mod";

            card.innerHTML = `
                <a href="${link}" target="_blank">
                    <img src="${image}" alt="${title}">
                </a>
                <h3>${title}</h3>
            `;
            container2.appendChild(card);
        });
    }
}

document.addEventListener("DOMContentLoaded", changeRSDKImage);
window.addEventListener('resize', changeRSDKImage);

function versionNumber() {
    const ver = document.getElementById('versionNumber');
    if (ver){
        ver.innerText = '0.1.20260203.0329a'
    }
}
document.addEventListener("DOMContentLoaded", versionNumber);