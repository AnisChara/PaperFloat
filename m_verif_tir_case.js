"use strict";

//const traitement_sauvegarde = require("./Fonction_sauvegarde")

const verif_tir_case = function(pos,grid) // fonction qui regarde si la case a la position donné dans la grille a déja subie un tir. 
{
    let posX = pos[0]; // récupération de la position X
    let posY = pos[1]; // récupération de la position Y

    if(grid[posY][posX] ==="false") // si la case n'est pas touchée alors on la passe en true touchée
    {
        return true; // return true "tir valide"
    }

    else if(grid[posY][posX] ==="true") // si la case n'est pas disponible
    {
        return false; // return false "tir impossible"
    }
    else
    {
        return "error"; // return "error" au cas ou problème
    }
}

module.exports = verif_tir_case;
//traitement_sauvegarde(grid,verif_tir_case,pos,grid); //appelle de la fonction qui va modifier la sauvegarde de la grille