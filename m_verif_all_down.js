"use strict";

const verif_all_down = function(grid,bateaux)
{
    grille = JSON.parse(grid);

    let bateau = 0;
    let index = 0;
    for(bateau; bateau <2; bateau++)
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
    
    for(bateau; bateau <4; bateau++)
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

    for(index = 0; index<4; index++)
    {
        if(bateaux[4][index].state === "true")
        {

        }

        else
        {
            return false;
        }
    }

    for(index = 0; index<10; index++)
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