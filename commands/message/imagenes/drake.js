const { Client, Message, MessageEmbed, Discord , MessageAttachment } = require("discord.js")
const { createCanvas, loadImage } = require('canvas')

const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

module.exports = {
    name: "drake",
    description: "El momo drake",
    category: "imagenes",
    aliases: [""],
    syntax: "drake <mencion>",
    cooldown: 3,
    permissions: [""],
    run: async (client, message, args, config) => {
        const mencionado = message.mentions.members.first()   
        if(!mencionado) return message.channel.send(config.mal + " Menciona a alguien")
        
	    const background = await loadImage('https://imgflip.com/s/meme/Drake-Hotline-Bling.jpg');
	    const avatar = await loadImage(message.author.displayAvatarURL({ format: 'png' }));
		const avatar2 = await loadImage(mencionado.user.displayAvatarURL({ format: 'png' }));


        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	    ctx.drawImage(avatar2, 100, 1, 100, 100);
        ctx.drawImage(avatar, 100, 100, 100, 100)

        
        const attachment = new MessageAttachment(canvas.toBuffer(), 'draake.png');
		return message.channel.send({files: [attachment]});




    }
}