//  ANNÉE DYNAMIQUE DANS LE FOOTER
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
// /DARK MODE / LIGHT MODE
const themeToggleButton = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

themeToggleButton.addEventListener("click", function () {
    if (htmlElement.getAttribute("data-theme") === "dark") {
        htmlElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        htmlElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
});

// Au chargement de la page, on vérifie si un thème était déjà choisi avant
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    htmlElement.setAttribute("data-theme", "dark");
}
//  BOUTON RETOUR EN HAUT 
// On récupère le bouton dans le footer
const backToTopButton = document.getElementById("back-to-top");
// On surveille le défilement de la page
window.addEventListener("scroll", function () {
    // Si on a défilé de plus de 300px vers le bas...
    if (window.scrollY > 300) {
        // ...on affiche le bouton
        backToTopButton.style.display = "block";
    } else {
        // ...sinon, on le cache
        backToTopButton.style.display = "none";
    }
});

// Quand on clique sur le bouton...
backToTopButton.addEventListener("click", function () {
    // ...on remonte en douceur tout en haut de la page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
