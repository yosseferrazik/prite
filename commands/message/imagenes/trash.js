const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require("discord.js")
const canvacord = require("canvacord");

module.exports = {
    name: "trash",
    description: "¿De mal humor?",
    category: "imagenes",
    aliases: [""],
    syntax: "trash <mencion>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {



        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trash(avatar);
        let attachment = new MessageAttachment(image, "trash.gif");
        message.channel.send({ files: [attachment] });

    }
}