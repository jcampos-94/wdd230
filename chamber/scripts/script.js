document.querySelector("#currentYear").innerHTML = new Date().getFullYear();
document.querySelector("#lastUpdated").innerHTML = document.lastModified;

document.querySelector("#currentYear2").innerHTML = new Date().getFullYear();
document.querySelector("#lastUpdated2").innerHTML = document.lastModified;

const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.textContent = fulldate;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

function closeBanner() {
    document.getElementById("banner").classList.remove("open");
    document.getElementById("banner").classList.add("close");
}

const bannerX = document.getElementById("bannerX");
bannerX.onclick = closeBanner;

const today = new Date().getDay();
const banner = document.getElementById("banner");
if (today === 1 || today === 2) {
    banner.classList.remove("close");
    banner.classList.add("open");
}