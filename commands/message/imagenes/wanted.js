const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require("discord.js")
const canvacord = require("canvacord");

module.exports = {
    name: "wanted",
    description: "En busca y captura",
    category: "imagenes",
    aliases: [""],
    syntax: "wanted <mensaje>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {



        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.wanted(avatar);
        let attachment = new MessageAttachment(image, "wanted.gif");
        message.channel.send({ files: [attachment] });

    }
}