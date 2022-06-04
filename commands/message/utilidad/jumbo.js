const { Client, Message, MessageEmbed, Discord } = require("discord.js")
const { parse, Util } = require("twemoji-parser");

module.exports = {
    name: "jumbo",
    description: "COnvierte un emoji a png",
    category: "utilidad",
    aliases: ["j"],
    syntax: "jumbo  <emoji>",
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {




        const authoravatar = message.author.avatarURL();
        const emoji = args[0];
        if (!emoji) return message.channel.send(`Envia un emoji`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
                customemoji.animated ? "gif" : "png"
                }`;

            const Added = new MessageEmbed()
                .setAuthor(`Enlarged Emoji`, authoravatar)
                .setDescription(`\`${customemoji.name}\` \`${customemoji.id}\``)
                .setImage(Link);
            return message.channel.send({ embeds: [Added] });
        } else {
            let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
                return message.channel.send(`Dame un emoji no una :poop:`);
            message.channel.send(
                `Siento decirte que solo funciona con emojis predeterminados`
            );
        }










    }
}