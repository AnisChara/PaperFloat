const fs = require("fs");

/**
 * fonction prend en paramètre "arguments" indice 0 sauvegarde, indice 1 fonction, indice 2 jusqu'au reste = paramètre de la fonction 
 * @param  {string} filename name of the json file to load and save
 * @param {Function} funct the callback function to execute. It recieve data from the json and following argument, the result of the callback is stored in the json file
 * @param {...any} args the argument for the callback
 */
const traitement_sauvegarde = function(...args) {
    let argument = [];
    for(let arg of args)
    {
        argument.push(arg);
    }
    
    console.log(argument);
    const filename = argument[0];
    const funct = argument[1];
    

    let save = JSON.parse(fs.readFileSync(filename)); // variable qui va récupérer le premier argument qui est l'élement de sauvegarde

    console.log(save);

    let parameters = argument.slice(2,args.length); // parameter va récupérer tous les autres paramètres destinée à la fonction

    console.log(parameters);
    console.log(argument[1]);

    //let fct = argument[1];
    //fct = function(save,parameter);
    
    save = funct(save,...parameters); // modification de la sauvegarde par la fonction

    console.log(save);

    // stringify pour sauvegarder les changements
    fs.writeFileSync(filename,JSON.stringify(save),"UTF-8");
}

module.exports = traitement_sauvegarde; // export de la fonction traitement_sauvegarde