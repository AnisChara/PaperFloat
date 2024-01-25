"use strict";

const bot = require("./m_bot.classic.js");
const fs = require("fs");
let grille = require("./grille/save_grille_admin.json");
let liste_bateaux = require("./bateaux/save_bateaux_admin.json");

grille = JSON.parse(fs.readFileSync("./grille/save_grille_admin.json",grille,"utf-8"));
liste_bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_admin.json",liste_bateaux,"utf-8")); 

let YesWeCan = false;
let tir;

while(YesWeCan === false)
{
    tir = bot(grille,liste_bateaux);

    for(let verify_y = 0; verify_y < grille.length; verify_y++)
    {
        for(let verify_x = 0; verify_x < grille[verify_y].length; verify_x++)
        {
            if(verify_x === tir[0] && verify_y === tir[1])
            {
                if(grille[verify_y][verify_x] === false)
                {
                    YesWeCan = true;
                }
            }
        }
    }
}
console.log(tir);



for(let y = 0; y < grille.length; y++)
{
    for(let x = 0; x < grille[y].length; x++)
    {
        if(x === tir[0] && y === tir[1])
        {
            grille[y][x] = true;
            fs.writeFileSync("./grille/save_grille_admin.json",JSON.stringify(grille),"utf-8");
        }
    }
}

for(let bateaux = 0; bateaux < liste_bateaux.length; bateaux++)
{
    for(let cell = 0; cell < liste_bateaux[bateaux].length; cell++)
    {
        if(liste_bateaux[bateaux][cell].x === tir[1] && liste_bateaux[bateaux][cell].y === tir[0])
        {
            liste_bateaux[bateaux][cell].state = true;
            fs.writeFileSync("./bateaux/save_bateaux_admin.json", JSON.stringify(liste_bateaux),"utf-8");
        }
    }
}

