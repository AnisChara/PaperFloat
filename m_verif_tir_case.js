"use strict";

const traitement_sauvegarde = require("./Fonction_sauvegarde")

const verif_tir_case = function(pos,grid)
{
    let posX = pos[0];
    let posY = pos[1];

    if(grid[posY][posX] ==="true")
    {
        grid [posY][posX] ==="false";
        return true;
    }

    else if(grid[posY][posX] ==="false")
    {
        return false;
    }
    else
    {
        return "error";
    }
}

traitement_sauvegarde(grid,verif_tir_case,pos,grid);