const { Client, Message, MessageEmbed, Discord } = require("discord.js")

module.exports = {
    name: "dm",
    description: "Habla con los miembros de tu servidor",
    category: "moderacion",
    aliases: ["directmessage"],
    syntax: "dm <mencion> <mensaje>",
    permissions: ["ADMINISTRATOR"], 
    cooldown: 5,
    owner:true,
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