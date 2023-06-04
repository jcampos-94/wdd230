/*---------- LAST MODIFIED ----------*/

document.querySelector("#currentYear").innerHTML = new Date().getFullYear();
document.querySelector("#lastUpdated").innerHTML = document.lastModified;

document.querySelector("#currentYear2").innerHTML = new Date().getFullYear();
document.querySelector("#lastUpdated2").innerHTML = document.lastModified;

/*---------- FULL DATE ----------*/

const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.textContent = fulldate;

/*---------- HAMBURGER BUTTON ----------*/

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

/*---------- BANNER ----------*/

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

/*---------- LAZY LOADING ----------*/

/* Selecting all images*/
const images = document.querySelectorAll("[data-srcset]");

/* Modify rootMargin bottom and threshold to test for the image loading */
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 150px 0px"
};

/* Replace src with data-src and then remove it */
function preloadImage(img) {
    const srcset = img.getAttribute("data-srcset");
    if (!srcset) {
        return;
    }

    img.srcset = srcset;
    img.onload = () => {
        img.removeAttribute("data-srcset");
    };
}

/* Image Observer */
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

/* Iterate through each image to load them */
images.forEach(image => {
    imgObserver.observe(image);
});

/*---------- LAST VISIT ----------*/

// Somewhere else in your code base set the last visit in localStorage

function displayDaysSinceLastVisit() {
    const visitsDisplay = document.querySelector('.daysSinceLastVisit');
    
    const lastVisit = Number(localStorage.getItem('lastVisit'));
    
    if (!lastVisit) {
        visitsDisplay.innerHTML = 'This is your first visit.';
        
        return;
    }
    
    const currentDate = Date.now();
    
    const difference = currentDate - lastVisit;
    const differenceInDays =difference / 84600000;
    
    visitsDisplay.innerHTML = differenceInDays.toFixed(0);
}

displayDaysSinceLastVisit();

localStorage.setItem('lastVisit', Date.now());