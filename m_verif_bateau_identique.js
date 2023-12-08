"use strict"

const fs = require("fs");

const doublon = function(co_bateau, player, party, nb_bateau)
{   
    //je recupere la liste des bateaux du joueur
    let bateaux = fs.readFileSync("./save_bateaux_"+player+"_"+party+".json")
    bateaux = JSON.parse(bateaux);

   // je rentre pour commencer dans la liste bateaux où il y a tous mes bateaux 
	for ( let i = 0; i < bateaux.length; i++)
	{
		// je balaye les coo de chaque bateaux 
		for ( let j = 0; j < bateaux[i].length; j++)
		{   
            if (i !== nb_bateau)
            {
                //je balaye les coo du bateau a verifier
                for (let u = 0; u < co_bateau.length; u++)
                {   
                
                    if(bateaux[i][j].x === co_bateau[u].x && bateaux[i][j].y === co_bateau[u].y)
                    {
                        co_bateau = false;   
                    }
                
                }
            }
        }
    }
    return co_bateau;
}
   
module.exports = doublon;