//  ANNÉE DYNAMIQUE DANS LE FOOTER
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;