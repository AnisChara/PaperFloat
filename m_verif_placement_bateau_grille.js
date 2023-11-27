"use strict"

// créer une fonction qui prend les co du bateau a verifier 
const verification_position = function (co_bateau)
{

		// ici je rentre dans la liste d'un des différent bateaux où j'ai mes différentes coordonées
		for ( let i = 0; i < co_bateau.length; i++)
		{	
			//je verifie si le bateau se trouve dans la grille
			if (co_bateau[i].x > 9 || co_bateau[i].y >9)
			{
				co_bateau = false;
			}
            else if (co_bateau[i].x < 0 || co_bateau[i].y < 0)
            {
                co_bateau = false;
            }
           
        }

	return co_bateau;
}

module.exports = verification_position;
