"use strict"

const fs = require("fs");

const verif_all_place = function(save_bateaux)
{
    save_bateaux = JSON.parse(fs.readFileSync(save_bateaux));

    let nb_bateau = 0;
    let index_case = 0;
    for(nb_bateau; nb_bateau < save_bateaux.length; nb_bateau++) // vérification si les 2 save_bateaux de 2 cases sont coulés
    {
        for(index_case = 0; index_case < save_bateaux[nb_bateau].length; index_case++)
        {
            if(save_bateaux[nb_bateau][index_case].x <= 9 && save_bateaux[nb_bateau][index_case].x >= 0 && save_bateaux[nb_bateau][index_case].y <= 9 && save_bateaux[nb_bateau][index_case].y >= 0)
            {           
            }
            else 
            {
                return false;
            }
        }
    }
}
/*let test = verif_all_place("./save_bateaux_1_2.json");
console.log(test);*/
module.exports = verif_all_place