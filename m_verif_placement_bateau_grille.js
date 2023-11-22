// require module d'Anis (module_liste_bateaux)
const bateaux = require("./m_liste_bateaux.js");
// require module du placement de bateaux 

// créer une fonction 
const verification_position = function (bateaux)
{
	// je rentre pour commencer dans la liste bateaux où il y a tous mes bateaux 
	for ( let i = 0; i < bateaux.length; i++)
	{
		// ici je rentre dans la liste d'un des différent bateaux où j'ai mes différentes coordonées
		for ( let j = 0; u < bateaux[i].length; u++)
		{
			if (bateaux[i][j].x > 9 || bateaux[i][j].y >9)
			{
				return false;
			}
            else if (bateaux[i][j].x > 0 || bateaux[i][j].y >0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
	}
}
module.exports = verification_position;
