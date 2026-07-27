//  ANNÉE DYNAMIQUE DANS LE FOOTER 
document.getElementById("year").textContent = new Date().getFullYear();

//  DARK MODE / LIGHT MODE 
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

//  BOUTON RETOUR EN HAUT 
const backToTopButton = document.getElementById("back-to-top");

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

//  MENU HAMBURGER MOBILE 
const hamburgerButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburgerButton.onclick = function () {
    navLinks.classList.toggle("show");
};

//  SCROLL : navbar dynamique + bouton retour en haut 
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
// ONGLETS DU PROGRAMME
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
        // On enlève "active" de tous les boutons, et "hidden" est ajouté à tous les contenus
        for (let j = 0; j < tabButtons.length; j++) {
            tabButtons[j].classList.remove("active");
        }
        for (let j = 0; j < tabContents.length; j++) {
            tabContents[j].classList.add("hidden");
        }

        // On active seulement le bouton cliqué
        tabButtons[i].classList.add("active");

        // On affiche seulement le contenu correspondant (grâce à data-day)
        const dayId = tabButtons[i].getAttribute("data-day");
        document.getElementById(dayId).classList.remove("hidden");
    });
}
//  FILTRAGE DES INTERVENANTS 
const filterButtons = document.querySelectorAll(".filter-btn");
const speakerCards = document.querySelectorAll(".speaker-card-full");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        // On enlève "active" de tous les boutons de filtre
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        // On active le bouton cliqué
        filterButtons[i].classList.add("active");

        // On récupère la catégorie choisie (ex: "ia-tech", "business", ou "tous")
        const selectedCategory = filterButtons[i].getAttribute("data-filter");

        // On regarde chaque carte intervenant
        for (let j = 0; j < speakerCards.length; j++) {
            const cardCategory = speakerCards[j].getAttribute("data-category");

            if (selectedCategory === "tous" || cardCategory === selectedCategory) {
                speakerCards[j].classList.remove("hidden");
            } else {
                speakerCards[j].classList.add("hidden");
            }
        }
    });
}
//  VALIDATION DU FORMULAIRE DE CONTACT 
const registrationForm = document.getElementById("registration-form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        // On empêche l'envoi normal du formulaire (qui rechargerait la page)
        event.preventDefault();

        let isFormValid = true;

        // Récupération des champs
        const fullname = document.getElementById("fullname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const participationType = document.getElementById("participation-type");
        const country = document.getElementById("country");
        const message = document.getElementById("message");

        // On récupère aussi les span d'erreur (juste après chaque champ dans le HTML)
        const fullnameError = fullname.nextElementSibling;
        const emailError = email.nextElementSibling;
        const phoneError = phone.nextElementSibling;
        const participationError = participationType.nextElementSibling;
        const countryError = country.nextElementSibling;
        const messageError = message.nextElementSibling;

        //  Validation du nom complet 
        if (fullname.value.trim() === "") {
            fullname.classList.add("invalid");
            fullname.classList.remove("valid");
            fullnameError.textContent = "Le nom complet est requis.";
            isFormValid = false;
        } else {
            fullname.classList.add("valid");
            fullname.classList.remove("invalid");
            fullnameError.textContent = "";
        }

        //  Validation de l'email avec une regex 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.classList.add("invalid");
            email.classList.remove("valid");
            emailError.textContent = "Veuillez entrer un email valide.";
            isFormValid = false;
        } else {
            email.classList.add("valid");
            email.classList.remove("invalid");
            emailError.textContent = "";
        }

        //  Validation du téléphone (minimum 8 chiffres) 
        const phoneDigitsOnly = phone.value.replace(/\D/g, "");
        if (phoneDigitsOnly.length < 8) {
            phone.classList.add("invalid");
            phone.classList.remove("valid");
            phoneError.textContent = "Le téléphone doit contenir au moins 8 chiffres.";
            isFormValid = false;
        } else {
            phone.classList.add("valid");
            phone.classList.remove("invalid");
            phoneError.textContent = "";
        }

        //  Validation du type de participation 
        if (participationType.value === "") {
            participationType.classList.add("invalid");
            participationType.classList.remove("valid");
            participationError.textContent = "Veuillez choisir un type de participation.";
            isFormValid = false;
        } else {
            participationType.classList.add("valid");
            participationType.classList.remove("invalid");
            participationError.textContent = "";
        }

        //  Validation du pays 
        if (country.value === "") {
            country.classList.add("invalid");
            country.classList.remove("valid");
            countryError.textContent = "Veuillez choisir un pays.";
            isFormValid = false;
        } else {
            country.classList.add("valid");
            country.classList.remove("invalid");
            countryError.textContent = "";
        }

        //  Validation du message (minimum 20 caractères) 
        if (message.value.trim().length < 20) {
            message.classList.add("invalid");
            message.classList.remove("valid");
            messageError.textContent = "Le message doit contenir au moins 20 caractères.";
            isFormValid = false;
        } else {
            message.classList.add("valid");
            message.classList.remove("invalid");
            messageError.textContent = "";
        }

        //  Si tout est valide, on affiche le succès et on réinitialise 
        const successMessage = document.querySelector(".success-message");
        if (isFormValid) {
            successMessage.textContent = "Votre inscription a bien été envoyée !";
            registrationForm.reset();

            // On enlève aussi les classes valid/invalid après reset
            fullname.classList.remove("valid");
            email.classList.remove("valid");
            phone.classList.remove("valid");
            participationType.classList.remove("valid");
            country.classList.remove("valid");
            message.classList.remove("valid");
        } else {
            successMessage.textContent = "";
        }
    });
}