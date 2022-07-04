const Discord = require('discord.js');
const prite = require('prite.js')

module.exports = {

    name: "8ball",
    aliases: [],
    description: "Te da una respuesta a cualquier pregunta",
    category: "diversion",
    cooldown: 4,
    syntax: "8ball <pregunta>",
    run: async (client, message, args, config) => {

        let pregunta = (args[0]);
        if (!pregunta) {
            return message.channel.send({
            content: config.mal + " ¿ Y la pregunta ?"
            });
        }
        
        await message.channel.send(`:8ball: ` + prite.randomBall());
    
    }
};