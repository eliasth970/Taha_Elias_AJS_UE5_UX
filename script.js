
"use strict";

const liste = document.getElementById("liste");

function afficherLivres(tableau) {
    for (const livre of tableau) {
        const carte = document.createElement("div");
        carte.className = "col-md-3 mb-3";
        carte.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${livre.titre}</h5>
                    <p class="card-text">${livre.auteur}</p>
                    <p class="card-text">${livre.annee}</p>
                </div>
            </div>
        `;
        liste.appendChild(carte);
    }
}

fetch("livres.json")

.then(function(reponse) {
    return reponse.json();
})

.then(function(livres) {
    const boutonRoman = document.getElementById("btn-roman");
    boutonRoman.addEventListener("click", function() {
        const romans = livres.filter(function(livre) {
            return livre.genre === "Roman";
        });
        liste.innerHTML = "";
        afficherLivres(romans);
    });

    const boutonAventure = document.getElementById("btn-aventure");
    boutonAventure.addEventListener("click", function() {
        const aventures = livres.filter(function(livre) {
            return livre.genre === "Aventure";
        });
        liste.innerHTML = "";
        afficherLivres(aventures);
    });

    const boutonConte = document.getElementById("btn-conte");
    boutonConte.addEventListener("click", function() {
        const contes = livres.filter(function(livre) {
            return livre.genre === "Conte";
        });
        liste.innerHTML = "";
        afficherLivres(contes);
    });

    const boutonFantastique = document.getElementById("btn-fantastique");
    boutonFantastique.addEventListener("click", function() {
        const fantastiques = livres.filter(function(livre) {
            return livre.genre === "Fantastique";
        });
        liste.innerHTML = "";
        afficherLivres(fantastiques);
    });
});
