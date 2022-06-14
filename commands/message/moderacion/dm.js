const { Client, Message, MessageEmbed, Discord } = require("discord.js")

module.exports = {
    name: "dm",
    description: "Habla entre miembros de tu grupo por dm",
    category: "moderacion",
    aliases: ["directmessage"],
    syntax: "dm <id de persona> <mensaje>",
    permissions: ["ADMINISTRATOR"], 
    cooldown: 5,
    run: async (client, message, args) => {
        
      message.delete();

      const user = message.mentions.users.first();
      const text = args.slice(1).join(" ");
    
      let embed = new MessageEmbed()
      .setTitle("**Querido usuario**")
      .setDescription(`${text}`)
      .setColor("#FBD570")
      .setFooter('Mensaje Directo')
      user.send({ embeds: [embed] })
    


    }
}