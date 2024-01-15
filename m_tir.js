"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");

const tir_grid = function(grille,liste_bateaux,co_tir,shot)
{
    const co_x = co_tir.x;
    const co_y = co_tir.y;
    let result = [];
    let place;

    if(co_x > 9 || co_y > 9 || co_x < 0 || co_y < 0)
    {
        return false;
    }
    else
    {
        if (shot === true)
        {   
            grille[co_x][co_y] = true;
            if (co_x < 9)grille[co_x+1][co_y] = true;
            if (co_x > 0)grille[co_x-1][co_y] = true;
            if (co_y < 9)grille[co_x][co_y+1] = true;
            if (co_y > 0)grille[co_x][co_y-1] = true;
        }
        else grille[co_x][co_y] = true;


        for(let bateau = 0; bateau < liste_bateaux.length; bateau++)
        {
            for(let cellule = 0; cellule < liste_bateaux[bateau].length; cellule++)
            {
                if (shot === true)
                {
                    if((liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x === co_x) || (liste_bateaux[bateau][cellule].y === co_y+1 && liste_bateaux[bateau][cellule].x === co_x) || (liste_bateaux[bateau][cellule].y === co_y-1 && liste_bateaux[bateau][cellule].x === co_x) || (liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x === co_x+1) || (liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x === co_x-1))
                    {
                        if (liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x === co_x)liste_bateaux[bateau][cellule].state = true;
                        if (liste_bateaux[bateau][cellule].y === co_y+1 && liste_bateaux[bateau][cellule].x === co_x)liste_bateaux[bateau][cellule].state = true;
                        if (liste_bateaux[bateau][cellule].y === co_y-1 && liste_bateaux[bateau][cellule].x === co_x)liste_bateaux[bateau][cellule].state = true;
                        if (liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x+1 === co_x)liste_bateaux[bateau][cellule].state = true;
                        if (liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x-1 === co_x)liste_bateaux[bateau][cellule].state = true;
                        
                        place = true;
                    }
                }
                else
                {
                    if (liste_bateaux[bateau][cellule].y === co_y && liste_bateaux[bateau][cellule].x === co_x)
                    {
                        liste_bateaux[bateau][cellule].state = true;
                        place = true;
                    } 
                }    
            }
        }
        result.push(grille);                    
        if (place === true)result.push(liste_bateaux);
        else result.push(undefined);
        return result;
    }


}

module.exports = tir_grid;
