const traitement_sauvegarde = function()
{
    save = JSON.parse(arguments[0])

    let parameter = slice(2,arguments.length)

    save = arguments[1](parameter);

    JSON.stringify(save)

}

module.exports = traitement_sauvegarde
