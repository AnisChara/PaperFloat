"use strict";

const fs = require("fs");

const create_grid = function(player) // fonction pour créer la sauvegarde de la grille
{
    
    const generer_grille = function() // fonction pour générer la grille
    {
        let grille = [];
        for(let y = 0; y < 10; y++) // génération des cases en y dans la grille
        {
            grille[y] = [""]
            for(let x = 0; x < 10; x++) // génération des cases en x dans la grille 
            {
                grille[y][x] = false;
            } 
        }
        return grille;
    }

    let grid = JSON.stringify(generer_grille()) // sauvegarde JSON de la grille 
    fs.writeFileSync("./grille/save_grille_"+player+".json",grid,"UTF-8") // création et/ou écriture d'une grille vierge 

}

module.exports = create_grid
