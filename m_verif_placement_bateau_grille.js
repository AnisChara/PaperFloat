// require module d'Anis (module_liste_bateaux)
const bateaux = require("./m_liste_bateaux");

// require module du placement de bateaux 

// créer une fonction 
const verification_position = function (bateau_choisi)
{
bateaux = JSON.parse(bateaux);


	// je rentre pour commencer dans la liste bateaux où il y a tous mes bateaux 
	for ( let i = 0; i < bateaux.length; i++)
	{
		// ici je rentre dans la liste d'un des différent bateaux où j'ai mes différentes coordonées
		for ( let j = 0; j < bateaux[i].length; j++)
		{
			if (bateaux[i][j].x > 9 || bateaux[i][j].y >9)
			{
				bateau_choisi = false;
			}
            else if (bateaux[i][j].x < 0 || bateaux[i][j].y < 0)
            {
                bateau_choisi = false;
            }
           
        }
	}
	return bateau_choisi;
}

module.exports = verification_position;
