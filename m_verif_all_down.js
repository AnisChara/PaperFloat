"use strict";

const verif_all_down = function(bateaux)
{
    let nb_bateau = 0;
    let index_case = 0;
    for(nb_bateau; nb_bateau < bateaux.length; nb_bateau++) // vérification si les 2 bateaux de 2 cases sont coulés
    {
        for(index_case = 0; index_case < bateaux[nb_bateau].length; index_case++)
        {
            if(bateaux[nb_bateau][index_case].state === true)
            {
                   
            }

            else if(bateaux[nb_bateau][index_case].state === false)
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

/*
const bateaux = [
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

const check = verif_all_down(bateaux);
console.log(check);
*/
