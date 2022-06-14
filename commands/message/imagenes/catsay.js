const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "catsay",
    description: "Gato gato gato",
    category: "imagenes",
    aliases: [""],
    syntax: "catsay <algo>",
    run: async (client, message, args , config) => {


        const msg = args.join(" ");
        if (!msg) {
            return message.channel.send(config.mal + "¿El gato dira... Nada?");
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