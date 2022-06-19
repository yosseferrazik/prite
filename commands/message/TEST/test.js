const { Client, Message, MessageEmbed, Discord, MessageAttachment } = require("discord.js")
const { createCanvas, loadImage } = require('canvas')


module.exports = {
    name: "t",
    description: "",
    category: "",
    aliases: [""],
    syntax: "",
    run: async (client, message, args, config) => {


        message.attachments.forEach(async attachment => {
            const imageurl = attachment.url;
            const background = await loadImage(`${imageurl}`);

            const canvas = createCanvas(attachment.width, attachment.height + 400)
            const ctx = canvas.getContext('2d')

            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.font = '150px Impact'
            ctx.fillText('Awesome!', 50, 100)


            const attachment1 = new MessageAttachment(canvas.toBuffer(), 'draake.png');
            return message.channel.send({ files: [attachment1] });
        });

    }
}