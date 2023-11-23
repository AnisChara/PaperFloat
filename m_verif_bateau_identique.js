// require module d'Anis (module_liste_bateaux)
const bateaux = require("./m_liste_bateaux.js");
const bateau_choisi = require("./")
// creer une fonction

const doublon = function(bateaux,bateau_choisi)
{
    // je rentre pour commencer dans la liste bateaux où il y a tous mes bateaux 
	for ( let i = 0; i < bateaux.length; i++)
	{
		// ici je rentre dans la liste d'un des différent bateaux où j'ai mes différentes coordonées
		for ( let j = 0; j < bateaux[i].length; j++)
		{
            let index = 1;
            if(bateaux[i][j].x !== bateaux[i][index].x && bateaux[i][j].y !== bateaux[i][index].y)
            {
                index++;   
            }
            else
            {
                console.log("ce bateau est placé sur un autre bateau");
               break; 
            }
        }
    }
}

module.exports = doublon;