"use strict"

const m_placement_bateau = function (co_case_choisi,bateau, rotate)
{   
    let u = 1;
    let j = false;
    let co_bateau = [];
    //Assignation des coordonnées de la case choisie à la premiere case du bateau
    co_bateau.push({x:co_case_choisi.x,y:co_case_choisi.y, state : false});


    //Assignation des autres cases du bateau selon la rotation
    if (rotate === false)
    
    {   
        if (bateau.length < 7)
        {
            for (let i = 1; i<= bateau.length/2; i++)
            {
                co_bateau.push({x :co_bateau[0].x , y :co_bateau[0].y + i, state : false});
                co_bateau.push({x :co_bateau[0].x , y :co_bateau[0].y - i, state : false});
            }
        }   //si il s'agit du bateau de 3x3
        else
        {
           co_bateau.push({x :co_bateau[0].x, y : co_bateau[0].y - 1, state : false} );
           co_bateau.push({x :co_bateau[0].x, y : co_bateau[0].y + 1, state : false} );
           co_bateau.push({x :co_bateau[0].x - 1, y : co_bateau[0].y , state : false} );
           co_bateau.push({x :co_bateau[0].x + 1, y : co_bateau[0].y , state : false} );
           co_bateau.push({x :co_bateau[0].x + 1, y : co_bateau[0].y + 1 , state : false} );
           co_bateau.push({x :co_bateau[0].x - 1, y : co_bateau[0].y + 1 , state : false} );
           co_bateau.push({x :co_bateau[0].x + 1, y : co_bateau[0].y - 1 , state : false} );
           co_bateau.push({x :co_bateau[0].x - 1, y : co_bateau[0].y - 1 , state : false} );
        }
    }

    if (rotate === true)
    
    {   
        if (bateau.length < 7)
        {
            for (let i = 1; i<= bateau.length/2; i++)
            {
                co_bateau.push({x: co_bateau[0].x + i, y : co_bateau[0].y, state : false});
                co_bateau.push({x: co_bateau[0].x - i, y : co_bateau[0].y, state : false});

            }
        }   //s'il s'agit du 3x3
        else
        {
           co_bateau.push({x :co_bateau[0].x, y : co_bateau[0].y - 1, state : false} );
           co_bateau.push({x :co_bateau[0].x, y : co_bateau[0].y + 1, state : false} );
           co_bateau.push({x :co_bateau[0].x - 1, y : co_bateau[0].y , state : false} );
           co_bateau.push({x :co_bateau[0].x + 1, y : co_bateau[0].y , state : false} );
           co_bateau.push({x :co_bateau[0].x + 1, y : co_bateau[0].y + 1 , state : false} );
           co_bateau.push({x :co_bateau[0].x - 1, y : co_bateau[0].y + 1 , state : false} );
           co_bateau.push({x :co_bateau[0].x + 1, y : co_bateau[0].y - 1 , state : false} );
           co_bateau.push({x :co_bateau[0].x - 1, y : co_bateau[0].y - 1 , state : false} );
        }
    }
    
    return co_bateau;
}

module.exports = m_placement_bateau;

