"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");

const tir_grid = function(grille,liste_bateaux,co_tir)
{
    const co_x = co_tir.x;
    const co_y = co_tir.y;
    let result = [];

    if(co_x > 9 || co_y > 9 || co_x < 0 || co_y < 0)
    {
        return false;
    }
    else
    {
        grille[co_x][co_y] = true;


        for(let bateau = 0; bateau < liste_bateaux.length; bateau++)
        {
            for(let cellule = 0; cellule < liste_bateaux[bateau].length; cellule++)
            {
                if(liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x === co_x)
                {
                    liste_bateaux[bateau][cellule].state = true;

                    result.push(grille);
                    result.push(liste_bateaux); 
                    return result;
                }
            }
        }
        result.push(grille);
        result.push(undefined);
        return result;
    }


}

module.exports = tir_grid;
