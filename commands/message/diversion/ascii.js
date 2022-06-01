const { Client, Message, MessageEmbed, discord } = require("discord.js")
const figlet = require("figlet")

module.exports = {
    name: "ascii",
    description: "Crea tu propio ascii papu :v",
    category: "diversion",
    aliases: [""],
    syntax: "ascii <texto>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {




        let text = args.join(" ");

        if (text.length > 20) {
            return message.channel.send(
                `<:mal:977661656937168926>  Porfavor intenta que no supere las 20 letras`
            );
        }

        figlet(text, function(err, data) {
            message.channel.send(data, {
                code: "AsciiArt",
            });
        });





    }
}