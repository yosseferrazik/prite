const { Client, Message, MessageEmbed, discord } = require("discord.js")
const prite = require('prite.js')
module.exports = {
    name: "dice",
    description: "Te proporciona un numero aleatorio entre el 1 y el 6",
    category: "diversion",
    aliases: ["dados", "dado"],
    syntax: "dice",
    cooldown: 5,
    run: async (client, message, args, config) => {

        message.channel.send(':black_joker:' + prite.dice())


    }
}