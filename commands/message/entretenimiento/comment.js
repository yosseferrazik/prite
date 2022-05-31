const Discord = require('discord.js');
const config = require('../../../settings/config.json');
const canvacord = require('canvacord');

module.exports = {
        name: 'comment',
        description: 'Un comentario de YT',
        aliases: ["comentario"],
        usage: 'comment <text>',
        category: 'entretenimiento',
        run: async (bot, message, args) => {
          
        const comment = args.join('');
        if(!comment) return message.channel.send(`<:mal:977661656937168926> ¿Y el comentario?`)
        try {    
          
          
        let yt = await canvacord.Canvas.youtube({"avatar":message.author.displayAvatarURL({format: "png"}),"username":message.author.username, "content":args.join(" ")})
        
        let attachment = new Discord.MessageAttachment(yt, 'comment.png')
        
      await
      message.channel.send({files: [attachment]});
    }catch(err) {
      
        const embed2 = new Discord.MessageEmbed()
              .setTitle(`<:mal:977661656937168926> Hm a pasado algo inesperado .`)
        message.channel.send({embeds: [embed2]});
    }

    }
};