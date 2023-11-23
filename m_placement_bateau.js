"use strict"

const m_placement_bateau = function (co_case_choisi, bateau_choisi, rotate)
{   
    //Assignation des coordonnées de la case choisie à la premiere case du bateau
    co_case_choisi.x = bateau_choisi[0].x; co_case_choisi.y = bateau_choisi[0].y;


    //Assignation des autres cases du bateau selon la rotation
    if (rotate === false)
    
    {
        for (let i = 1; i< bateau_choisi.length; i++)
        {
            bateau_choisi[i].y = bateau_choisi[0].y + i;
            bateau_choisi[i].x = bateau_choisi[0].x;
        }
    }

    if (rotate === true)
    
    {
        for (let i = 1; i< bateau_choisi.length; i++)
        {
            bateau_choisi[i].x = bateau_choisi[0].x + i;
            bateau_choisi[i].y = bateau_choisi[0].y;
        }
    }
    
    return bateau_choisi;
}

module.exports = m_placement_bateau;

