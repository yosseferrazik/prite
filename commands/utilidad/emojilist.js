const { Client, Message, MessageEmbed } = require("discord.js")


module.exports = {
    name: "emojilist", 
    description: "Un comando para ver los emojis actuales del servidor", 
    category: "utilidad", 
    aliases: ["emojis"], 
    syntax: "emojilist", 
    permissions: ["MANAGE_EMOJIS"], 
    owner: true, 
      run: async (client, message, args) => {
        
   if (!message.member.permissions.has('MANAGE_EMOJIS')) {
      return message.channel
        .send({content:"Te faltan los permisos :`manage_emojis` "});
    }
        
     const emojiList = message.guild.emojis.cache.map((e, x) => `${x} = ${e} | ${e.name}`).join("\n");
      
      
      const embed = new MessageEmbed()
        .setTitle(`Emojis del servidor`)
        .setFooter(`${message.author.tag}`, message.author.avatarURL())
        .setColor("RANDOM")
        .setDescription(emojiList)

      message.channel.send({ embeds: [embed] })
      
      
      
      
      }
}