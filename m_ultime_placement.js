"use strict"

const fs = require("fs");

    

const m_placement_bateau = require("./m_placement_bateau.js");
const verification_position = require("./m_verif_placement_bateau_grille.js");
const doublon = require("./m_verif_bateau_identique.js");

const ultime_placement = function(player,party,co_case_choisi,rotate,bateau)
{  
   
    
    let co_bateau;

    //je recupere la sauvegarde des bateaux selon le joueur et la partie
    let bateaux = fs.readFileSync("./save_bateaux_"+player+"_"+party+".json");
    bateaux = JSON.parse(bateaux);
    let nb_bateau = bateau;
    bateau = bateaux[bateau];

    //execution des programmes
    co_bateau = m_placement_bateau (co_case_choisi,bateau, rotate);
    co_bateau = verification_position(co_bateau);
    co_bateau = doublon(co_bateau,player,party, nb_bateau);

    //si un des modules renvoi une erreur
    if(co_bateau === false)
    {   
        return false
    }
    //on applique les nouvelles coo a la sauvegarde
    else
    {   
        for(let i = 0 ; i < bateau.length; i++ )
        {
            bateau[i].x = co_bateau[i].x; bateau[i].y = co_bateau[i].y; 
        }
    }
        return bateaux;
   }



module.exports = ultime_placement