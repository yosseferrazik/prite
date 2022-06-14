const Discord = require('discord.js');

module.exports = {

    name: "8ball",
    aliases: [],
    description: "Te da una respuesta a cualquier pregunta",
    category: "diversion",
    cooldown: 4,
    run: async (client, message, args , config) => {

        let list = [
            'Si', 'N0', 'Puede ser', 'Lo dudo', 'Arriba españa', 'XD ok no', 'No lo creo', 'La respuesta es evidente ', 'La respuesta esta en tu corazon', 'hmmmmmmm... lo siento pero no , chupala  ', 'jaj te gusta el pene '];



        var rand = list[Math.floor(Math.random() * list.length)];
        let pregunta = (args[0]);
        if (!pregunta) {
            return message.channel.send({
                content: config.mal + " ¿ Y la pregunta ?"
            });
        }



        await message.channel.send(`<:8ball:981081849377992714> ${rand} `);



    }
};