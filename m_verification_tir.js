// module qui vérifie si l'utilisateur touche un bateaux ou pas 
"use strict";

// require module de anis (module_liste_bateaux)
const bateau = require("m_liste_bateaux");
// require module de tir 

// créer une fonction 
const verification_tir = function ()
{
	// lire la grille 
	//for ( let i = 0; i < 9; i++ ) 
	//{
	//	for ( let j = 0; i < 9; i++ ) 
	//	{	
		// il faut vérifier si la colonne cliquée par l'utilisateur, si il y a un bateaux ou pas
			if ( user === tir )
			{
				// si l'utilisateur tir et qu'il y a un bateau (coordonée du bateau)
				else if ( tir === bateau )
				{
					//il y a un bateau,renvoyer "true" puis afficher autre module qui permet d'afficher la case qui est touchée
					bateau = true; 
					console.log("il y a un bateau"); 		
				}
				// si l'utilisateur tir et qu'il n'y a pas de bateau(coordonée du bateau)
				else if ( tir !== bateau )
				{
					//il n'y a pas de bateau,renvoyer "false" puis ne rien afficher
					bateau = false; 
					console.log("il n'y a pas de bateau"); 		
				}
			}
		}
	
	}

}
module.exports = verification_tir;
