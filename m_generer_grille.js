"use strict";

const fs = require("fs");

const player = 1;
const party = 2;

const create_grid = function(player,party)
{
    
    const generer_grille = function()
    {
        let grille = [];
        for(let y = 0; y != 9; y++)
        {
            grille[y] = [""]
            for(let x = 0; x != 9; x++)
            {
                grille[y][x] = "true";
            } 
        }
        return grille;
    }

    let grid = JSON.stringify(generer_grille())
    fs.writeFileSync("./save_grid_"+player+"_"+party+".js",grid,"UTF-8")

}

create_grid(player,party);