const couleurs = ["red", "yellow", "blue", "orange"];
const corps = ["images/monstre1.png", "images/monstre2.png", "images/monstre3.png"]
const yeux = ["images/yeux1.png", "images/yeux2.png", "images/yeux3.png"]
let monstre = document.querySelector(".monstre");
let imageCorps = document.querySelector(".corps");
let imageYeux = document.querySelector(".yeux");
const section = document.querySelector(".monstre"); 

const button = document.querySelector(".button");

button.addEventListener("click", generer)


function generer() {
    let randomCouleur = Math.floor(Math.random() * couleurs.length);
    let randomCorps = Math.floor(Math.random() * corps.length);
    let randomYeux = Math.floor(Math.random() * yeux.length);
    section.style.backgroundColor= couleurs[randomCouleur]
    imageCorps.src = corps[randomCorps];
    imageCorps.style.display = "block";
    imageYeux.src = yeux[randomYeux];
    imageYeux.style.display = "block";


}