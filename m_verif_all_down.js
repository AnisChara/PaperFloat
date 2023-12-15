"use strict";

const fs = require("fs");

const verif_all_down = function(save_bateaux)
{
    save_bateaux = JSON.parse(fs.readFileSync(save_bateaux));

    let nb_bateau = 0;
    let index_case = 0;
    for(nb_bateau; nb_bateau < save_bateaux.length; nb_bateau++) // vérification si les 2 save_bateaux de 2 cases sont coulés
    {
        for(index_case = 0; index_case < save_bateaux[nb_bateau].length; index_case++)
        {
            if(save_bateaux[nb_bateau][index_case].state === true)
            {
                   
            }

            else if(save_bateaux[nb_bateau][index_case].state === false)
            {
                return false
            }
            else 
            {
                return (" error "+"bateau "+nb_bateau+" case "+index_case)
            }
        }
    }
    return true;
}
module.exports = verif_all_down
/*
const save_bateaux = [
                    [  
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true}
                    ],
                    
                    [
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":"missing"}
                    ],
                    
                    [
                        {"x":11,"y":11,"state":false},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true}
                    ],
                    
                    [
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true}
                    ],
                    
                    [
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true}
                    ],
                    
                    [
                        {"x":11,"y":11,"state":"missing"},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true},
                        {"x":11,"y":11,"state":true}
                    ]
                ]

const check = verif_all_down(save_bateaux);
console.log(check);
*/
