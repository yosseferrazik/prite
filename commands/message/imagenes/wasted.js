const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require("discord.js")
const canvacord = require("canvacord");

module.exports = {
    name: "wasted",
    description: "Arrestado",
    category: "imagenes",
    aliases: [""],
    syntax: "wasted <mensaje>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {



        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.wasted(avatar);
        let attachment = new MessageAttachment(image, "wasteded.gif");
        message.channel.send({ files: [attachment] });

    }
}