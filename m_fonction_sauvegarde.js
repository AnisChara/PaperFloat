const fs = require("fs");

const traitement_sauvegarde = function(...args) // fonction prend en paramètre "arguments" indice 0 sauvegarde, indice 1 fonction, indice 2 jusqu'au reste = paramètre de la fonction 
{
    let argument = [];
    for(let arg of args)
    {
        argument.push(arg);
    }
    
    console.log(argument);
    
    let save = fs.readFileSync(argument[0]);

    save = JSON.parse(save); // variable qui va récupérer le premier argument qui est l'élement de sauvegarde

    console.log(save);

    let parameter = argument.slice(2,args.length); // parameter va récupérer tous les autres paramètres destinée à la fonction

    console.log(parameter);
    console.log(argument[1]);

    //let fct = argument[1];
    //fct = function(save,parameter);
    save = argument[1](save,parameter); // modification de la sauvegarde par la fonction

    console.log(save);

    save = JSON.stringify(save); // stringify pour sauvegarder les changements

 fs.writeFileSync(argument[0],save,"UTF-8");
}

module.exports = traitement_sauvegarde; // export de la fonction traitement_sauvegarde

const create_test_save = function()
{
    let json_test = 10;
    json_test = JSON.stringify(json_test);
    fs.writeFileSync("./nb_test.json",json_test,"UTF-8");
}

const exe = function(nbBase,nb1,nb2,nb3,nb4)
{
    nbBase = Number(nbBase + nb1);
    nbBase = Number(nbBase - nb2);
    nbBase = Number(nbBase / nb3);
    nbBase = Number(nbBase **nb4);
}

create_test_save(); 
traitement_sauvegarde("./nb_test.json",exe,"2","3","3","4");
const show = fs.readFileSync("./nb_test.json");
console.log(show);