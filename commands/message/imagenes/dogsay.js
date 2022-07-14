const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "dogsay",
    description: "¿Conoces el meme de cheems?",
    category: "imagenes",
    aliases: ["doge"],
    syntax: "dogsay <mensaje>",
    cooldown:5,
    run: async (client, message, args , config) => {

        const splitArgs = args.join(" ").split("/")
        const text1 = splitArgs[0]
        if (!text1) return message.channel.send(config.mal + "Proporcioname un texto. \nNota: Usa '/' para dividir el texto \n Ejemplo: p.doge ejemplo1 texto1 / ejemplo2 texto2")
        const text2 = splitArgs[1]
        if (!text2) return message.channel.send(config.mal + "Proporcioname mas texto. \nNota: Usa '/' para dividir el texto \n Ejemplo: p.doge ejemplo1 texto1 / ejemplo2 texto2")
        message.channel.send({ files: [{ attachment: `https://api.memegen.link/images/doge/${text1}/${text2}`, name: "meme.png" }] });
        

    }
}