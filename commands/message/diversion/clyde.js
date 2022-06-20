const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "clyde",
    description: "Genera una imagen con un mensaje de clyde",
    category: "diversion",
    aliases: [],
    syntax: "clyde <mensaje>",
    cooldown: 5,
    run: async (client, message, args, config) => {

        const Value = args.join(" ");

        if (!Value || Value.length > 150) return message.channel.send(config.mal + "El mensaje no debe tener mas de 150 letras ");

        const Embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Clyde (" + message.author.username + ")")
            .setImage(encodeURI(`https://ctk-api.herokuapp.com/clyde/${Value}%20`))
            .setTimestamp();

        return message.channel.send({embeds:[Embed]});


    }
}