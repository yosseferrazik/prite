const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require("discord.js")
const canvacord = require("canvacord");

module.exports = {
    name: "fuse",
    description: "Fuuuuusion *referencia a dragonball*",
    category: "imagenes",
    aliases: ["puteado"],
    syntax: "fuse <mencion>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {



        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.fuse(avatar, avatar);
        let attachment = new MessageAttachment(image, "fuseed.gif");
        message.channel.send({ files: [attachment] });

    }
}