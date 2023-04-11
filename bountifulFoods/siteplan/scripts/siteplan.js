//To get the current year in Footer//
const options = {year: 'numeric'};
document.getElementById('currentyear').innerHTML = new Date().toLocaleDateString('en', options);

//To get last modified date//
let text = document.lastModified;
document.getElementById('lastmodified').innerHTML = text;