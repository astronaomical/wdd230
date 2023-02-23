year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent= currentYear;

let lastModified = new Date(document.lastModified);

document.getElementById("lastmodified").textContent = lastModified;