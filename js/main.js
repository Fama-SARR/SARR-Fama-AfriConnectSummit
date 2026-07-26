// ===== ANNÉE DYNAMIQUE DANS LE FOOTER =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== DARK MODE / LIGHT MODE =====
const themeToggleButton = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

themeToggleButton.onclick = function () {
    if (htmlElement.getAttribute("data-theme") === "dark") {
        htmlElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        htmlElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
};

if (localStorage.getItem("theme") === "dark") {
    htmlElement.setAttribute("data-theme", "dark");
}

// ===== BOUTON RETOUR EN HAUT =====
const backToTopButton = document.getElementById("back-to-top");

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ===== MENU HAMBURGER MOBILE =====
const hamburgerButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburgerButton.onclick = function () {
    navLinks.classList.toggle("show");
};

// ===== SCROLL : navbar dynamique + bouton retour en haut =====
window.onscroll = function () {
    const mainNav = document.querySelector(".main-nav");

    if (window.scrollY > 80) {
        mainNav.classList.add("scrolled");
    } else {
        mainNav.classList.remove("scrolled");
    }

    if (window.scrollY > 300) {
 
        backToTopButton.style.display = "block";
    } else {
  
        backToTopButton.style.display = "none";
    }
};