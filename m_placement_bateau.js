"use strict"

const m_placement_bateau = function (co_case_choisi, bateau_choisi, rotate)
{
    co_case_choisi.x = bateau_choisi[0].x; co_case_choisi.y = bateau_choisi[0].y;

    if (rotate === false)
    
    {
        for (let i = 1; i< bateau_choisi.length; i++)
        {
            bateau_choisi[i].y = bateau_choisi[0].y + i;
        }
    }

    if (rotate === true)
    
    {
        for (let i = 1; i< bateau_choisi.length; i++)
        {
            bateau_choisi[i].x = bateau_choisi[0].x + i;
        }
    }
    
    return bateau_choisi;
}

module.exports = m_placement_bateau;

