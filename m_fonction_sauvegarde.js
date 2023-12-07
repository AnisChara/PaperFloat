const fs = require("fs");

const traitement_sauvegarde = function(...args) // fonction prend en paramètre "arguments" indice 0 sauvegarde, indice 1 fonction, indice 2 jusqu'au reste = paramètre de la fonction 
{
    for(let arg of args)arguments.push(args);
    
    save = fs.readFileSync(arguments[0]);

    save = JSON.parse(save) // variable qui va récupérer le premier argument qui est l'élement de sauvegarde

    let parameter = slice(2,args.length) // parameter va récupérer tous les autres paramètres destinée à la fonction

    save = arguments[1](parameter); // modification de la sauvegarde par la fonction

    JSON.stringify(save); // stringify pour sauvegarder les changements

    fs.writeFileSync(arguments[0],save,"UTF-8")
}

module.exports = traitement_sauvegarde // export de la fonction traitement_sauvegarde

const create_test_save = function()
{
    const json_test = 10;
    String(json_test);
    JSON.stringify(json_test);
    fs.writeFileSync("./nb_test",json_test,"UTF-8");
}

const exe = function(nbBase,nb1,nb2,nb3,nb4)
{
    nbBase = Number(nbBase + nb1);
    nbBase = Number(nbBase - nb2);
    nbBase = Number(nbBase / nb3);
    nbBase = Number(nbBase **nb4);
}

create_test_save();
traitement_sauvegarde("./nb_test",exe,"2","3","3","4");
const show = fs.readFileSync("./nb_test");
console.log(show);