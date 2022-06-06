const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require("discord.js")
const canvacord = require("canvacord");

module.exports = {
    name: "affect",
    description: "¿ Necesitas afecto femenino ?",
    category: "imagenes",
    aliases: ["puteado"],
    syntax: "affect <mencion>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {



        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.affect(avatar);
        let attachment = new MessageAttachment(image, "affected.gif");
        message.channel.send({ files: [attachment] });

    }
}