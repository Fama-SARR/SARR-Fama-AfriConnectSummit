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