//Code for the toggle menu//
function toggleMenu(){
    document.getElementById('togglebtn').classList.toggle('open');
    document.getElementById('menuItems').classList.toggle('open');
}
const x = document.getElementById('togglebtn');
x.onclick = toggleMenu;

//Code for Footer dates//
//Current Year//
const options = {year: 'numeric'};
document.getElementById('currentyear').innerHTML = new Date().toLocaleDateString('en', options);
//Last Modified//
let text = document.lastModified;
document.getElementById('lastmodified').innerHTML = text;