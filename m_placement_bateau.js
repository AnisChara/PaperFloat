"use strict"

const m_placement_bateau = function (co_case_choisi,bateau, rotate)
{   
    let u = 1;
    let j = false;
    let co_bateau = [];
    //Assignation des coordonnées de la case choisie à la premiere case du bateau
    co_bateau.push({x:co_case_choisi.x,y:co_case_choisi.y});


    //Assignation des autres cases du bateau selon la rotation
    if (rotate === false)
    
    {   
        if (bateau.length < 5)
        {
            for (let i = 1; i< bateau.length; i++)
            {
                co_bateau.push({x :co_bateau[0].x , y :co_bateau[0].y + i});
            }
        }
        if (bateau.length > 5)
        {
            for (let i = 1; i<bateau.length; i++)
            {
                if ( u === 5 ) 
                {   
                    j = true; u = 0;
                }
                if (j === true)
                {
                
                co_bateau.push({x :co_bateau[0].x + 1, y :co_bateau[0].y + u});
                

               }
               else co_bateau.push({x:co_case_choisi.x,y:co_case_choisi.y+ u});
               u++
            }
        }
    }

    if (rotate === true)
    
    {
        for (let i = 1; i< bateau.length; i++)
        {
            co_bateau.push({x: co_bateau[0].x + i, y : co_bateau[0].y});
        }
    }
    
    return co_bateau;
}

module.exports = m_placement_bateau;

