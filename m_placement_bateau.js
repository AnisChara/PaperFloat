"use strict"

const m_placement_bateau = function (co_case_choisi,bateau, rotate)
{   
    let co_bateau = [];
    //Assignation des coordonnées de la case choisie à la premiere case du bateau
    co_bateau.push({x:co_case_choisi.x,y:co_case_choisi.y});


    //Assignation des autres cases du bateau selon la rotation
    if (rotate === false)
    
    {
        for (let i = 1; i< bateau.length; i++)
        {
            co_bateau.push({x :co_bateau[0].x , y :co_bateau[0].y + i}) ;
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

