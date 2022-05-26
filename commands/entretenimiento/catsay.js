const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "catsay",
    description: "Gato gato gato",
    category: "entretenimiento",
    aliases: [""],
    syntax: "catsay <algo>",
    run: async (client, message, args) => {


        const msg = args.join(" ");
        if (!msg) {
            return message.channel.send("¿Que quieres que diga?");
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