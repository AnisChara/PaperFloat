"use strict";

const verif_all_down = function(grid,bateaux)
{
    grille = JSON.parse(grid);

    let bateau = 0;
    let index = 0;
    for(bateau; bateau <2; bateau++) // vérification si les 2 bateaux de 2 cases sont coulés
    {
        for(index = 0; index<2;index++)
        {
            if(bateaux[bateau][index].state === "true")
            {

            }

            else
            {
                return false;
            }
        }
    }
    
    for(bateau; bateau <4; bateau++) // vérification si les 2 bateaux de 3 cases sont coulés
    {
        for(index = 0; index<3;index++)
        {
            if(bateaux[bateau][index].state === "true")
            {

            }

            else
            {
                return false;
            }
        }
    }

    for(index = 0; index<4; index++) // vérification si le bateau de 4 cases est coulé
    {
        if(bateaux[4][index].state === "true")
        {

        }

        else
        {
            return false;
        }
    }

    for(index = 0; index<10; index++) // vérification si le bateau de 10 cases est coulé
    {
        if(bateau[5][index].state === "true")
        {

        }

        else
        {
            return false;
        }
    }
    return true;
}