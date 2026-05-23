const couleurs = ["red", "yellow", "blue", "orange"];
const corps = ["images/monstre1.png", "images/monstre2.png", "images/monstre3.png"]
const yeux = ["images/yeux1.png", "images/yeux2.png", "images/yeux3.png"]
let monstre = document.querySelector(".monstre");
let imageCorps = document.querySelector(".corps");
let imageYeux = document.querySelector(".yeux");
const section = document.querySelector(".monstre");
let flechecorpsdroite = document.querySelector(".corps-droit");
let flechecorpsgauche = document.querySelector(".corps-gauche");

let flecheyeuxdroite = document.querySelector(".yeux-droit");
let flecheyeuxgauche = document.querySelector(".yeux-gauche");

let flechebackgrounddroite = document.querySelector(".background-droit");
let flechebackgroundgauche = document.querySelector(".background-gauche");
let index = 0;
const button = document.querySelector(".button");

button.addEventListener("click", generer)
flechecorpsdroite.addEventListener("click", function () {
    defiler("droite", "corps");
});

flechecorpsgauche.addEventListener("click", function () { defiler("gauche", "corps"); });

flecheyeuxdroite.addEventListener("click", function () {
    defiler("droite", "yeux");
});

flecheyeuxgauche.addEventListener("click", function () { defiler("gauche", "yeux"); });


function generer() {
    let randomCouleur = Math.floor(Math.random() * couleurs.length);
    let randomCorps = Math.floor(Math.random() * corps.length);
    let randomYeux = Math.floor(Math.random() * yeux.length);
    section.style.backgroundColor = couleurs[randomCouleur]
    imageCorps.src = corps[randomCorps];
    imageCorps.style.display = "block";
    imageYeux.src = yeux[randomYeux];
    imageYeux.style.display = "block";

}



function defiler(cote, partie) {

    imageCorps.style.display = "block";

    if (partie == "corps") {
        if (cote == "droite") {
            index++;
            if (index >= corps.length) {
                index = 0;

            }
        }

        else if (cote == "gauche") {
            index--;
            if (index < 0) {
                index = 2;
            }

        } imageCorps.src = corps[index];
        imageCorps.style.display = "block";
    }



    else if (partie == yeux) {
        if (cote == "droite") {
            index++;
            if (index >= yeux.length) {
                index = 0;

            }
        }

        else if (cote == "gauche") {
            index--;
            if (index <= 0) {
                index = 2;
            }

        } imageYeux.src = yeux[index];
        imageYeux.style.display = "block";
    }
}