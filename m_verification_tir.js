// module qui vérifie si l'utilisateur touche un bateaux ou pas 
"use strict";

// require module de anis (module_liste_bateaux)
const bateaux = require("./m_liste_bateaux.js");
// require module de tir 

// créer une fonction 
const verification_tir = function (tir, bateaux)
{
	// je rentre pour commencer dans la liste bateaux où il y tout mes bateaux 
	for ( let i = 0; i < bateaux.length; i++)
	{
		// ici je rentre dans la liste d'un des différent bateaux où j'ai mes différentes coordonées
		for ( let u = 0; u < bateaux[i].length; u++)
		{
			// si le tir en x, y va être égal au coordonée du bateaux en x et y alors on change le statut en "true"
			if (tir.x === bateaux[i][u].x && tir.y === bateaux[i][u].y)
			{
				bateaux[i][u].state = true; 
			}
		}
	
	}
}
module.exports = verification_tir;
