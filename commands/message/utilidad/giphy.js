const { Client, Message, MessageEmbed, Discord } = require("discord.js")
const giphy = require("giphy-api")("lYz7fXhg9dmCypyh98kmcVijSDnEvTGu");

module.exports = {
    name: "giphy",
    description: "Busca tu gif favorito",
    category: "utilidad",
    aliases: ["gif"],
    syntax: "gif <gif>",
    run: async (client, message, args, config) => {




        if (args.length === 0) {
            message.channel.send(config.mal + " ¿Y el gif?");
            return;
        }
        if (args.length === 1) {
            term = args.toString();
        } else {
            term = args.join(" ");
        }
        giphy.search(term).then(function(res) {

            let id = res.data[0].id;
            let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`;

            const embed = new MessageEmbed()

                .setTitle(`Primer resultado de  \`${term}\` en GIPHY`)
                .setImage(msgurl)
                .setFooter(
                    `Gif sacado de GIPHY`,
                    `https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif`
                )
                .setColor("RANDOM");
            message.channel.send({ embeds: [embed] });
        });




    }
}