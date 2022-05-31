const { Client, Message, MessageEmbed, Discord } = require("discord.js")

module.exports = {
    name: "nuke",
    description: "¿ Quieres que caiga una bomba nuclear en tu chat ?",
    category: "moderacion",
    aliases: [],
    cooldown: 5,
    syntax: "nuke",
    permissions: ["MANAGE_CHANNELS"],
    owner: false,
    run: async (client, message, args) => {








        let posicion = message.channel.position

        message.channel.clone().then((canal) => {

            message.channel.delete()


            canal.setPosition(posicion)



        })

    }
}