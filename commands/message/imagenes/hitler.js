const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require("discord.js")
const canvacord = require("canvacord");

module.exports = {
    name: "hitler",
    description: "¿Que tan malo puede ser este comando?",
    category: "imagenes",
    aliases: [""],
    syntax: "hitler <mencion>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {



        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.hitler(avatar);
        let attachment = new MessageAttachment(image, "hitlered.gif");
        message.channel.send({ files: [attachment] });

    }
}