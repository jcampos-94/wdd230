// HAMBURGER BUTTON

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;