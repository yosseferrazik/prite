const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "catsay",
    description: "Gato gato gato",
    category: "imagenes",
    aliases: [""],
    syntax: "catsay <algo>",
    run: async (client, message, args) => {


        const msg = args.join(" ");
        if (!msg) {
            return message.channel.send("<:mal:977661656937168926> ¿El gato dira... Nada?");
        }
        message.channel.send({
            files: [
                {
                    attachment: `https://cataas.com/cat/cute/says/${msg}`,
                    name: "catsay.png",
                },
            ],
        });

    }
}