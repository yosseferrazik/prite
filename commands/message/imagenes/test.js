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
            const background = await loadImage(`https://fondosmil.com/fondo/17538.jpg`)
            const backgroundi = await loadImage(`${imageurl}`);
            const caption = args.join("  ")
            const canvas = createCanvas(attachment.width, attachment.height+100)
            const ctx = canvas.getContext('2d')

            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(backgroundi, 0, 100, attachment.width, attachment.height);

            ctx.font = '50px Impact'
            ctx.fillText(`${caption}`, 0, 0)



            const attachment1 = new MessageAttachment(canvas.toBuffer(), 'xdxd.gif');
            return message.channel.send({ files: [attachment1] });
        });

    }
}