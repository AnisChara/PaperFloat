const fs = require("fs");

const traitement_sauvegarde = function(...args) // fonction prend en paramètre "arguments" indice 0 sauvegarde, indice 1 fonction, indice 2 jusqu'au reste = paramètre de la fonction 
{
    for(let arg of args)arguments.push(args);
    
    save = fs.readFileSync(arguments[0]);

    save = JSON.parse(save) // variable qui va récupérer le premier argument qui est l'élement de sauvegarde

    let parameter = slice(2,args.length) // parameter va récupérer tous les autres paramètres destinée à la fonction

    save = arguments[1](parameter); // modification de la sauvegarde par la fonction

    JSON.stringify(save); // stringify pour sauvegarder les changements

    fs.WriteFileSync(save,"UTF-8")
}

module.exports = traitement_sauvegarde // export de la fonction traitement_sauvegarde
