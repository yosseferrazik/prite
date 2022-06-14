const Discord = require('discord.js');
const config = require('../../../settings/config.json');
const canvacord = require('canvacord');

module.exports = {
    name: 'yt-comment',
    description: 'Un comentario de YT',
    aliases: ["comentario"],
    usage: 'comment <text>',
    category: 'imagenes',
    run: async (bot, message, args, config) => {

        const comment = args.join('');
        if (!comment) return message.channel.send(config.mal + `¿Y el comentario?`)
        try {


            let yt = await canvacord.Canvas.youtube({ "avatar": message.author.displayAvatarURL({ format: "png" }), "username": message.author.username, "content": args.join(" ") })

            let attachment = new Discord.MessageAttachment(yt, 'comment.png')

            await
                message.channel.send({ files: [attachment] });
        } catch (err) {

  
            message.channel.send(config.mal + err);
        }

    }
};