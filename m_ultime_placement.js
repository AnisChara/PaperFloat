"use strict"

const fs = require("fs");

const m_placement_bateau = require("./m_placement_bateau.js");
const verification_position = require("./m_verif_placement_bateau_grille.js");
const doublon = require("./m_verif_bateau_identique.js");


const ultime_placement = function(player,party,co_case_choisi,rotate,bateau)
{  
    let co_bateau;
    let bateaux = fs.readFileSync("./save_bateaux_"+player+"_"+party+".js");
    bateaux = JSON.parse(bateaux);
    co_bateau = m_placement_bateau (co_case_choisi,bateau, rotate);
    co_bateau = verification_position(co_bateau);
    co_bateau = doublon(co_bateau,player,party);

    if(co_bateau === false)
    {   
        return false
    }
    else
    {
        for(let i = 0 ; i < bateau.length; i++ )
        {
            bateau[i].x = co_bateau[i].x; bateau[i].y = co_bateau[i].y; 
        }
    }
    bateaux = JSON.stringify(bateaux);
    fs.writeFileSync("./save_bateaux_"+player+"_"+party+".js",bateaux,"UTF-8");
}



module.exports = ultime_placement