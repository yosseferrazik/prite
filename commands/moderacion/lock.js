const util = require('node:util');
const { Client, Intents, Formatters, Permissions } = require('discord.js');

module.exports = {
    name: "lock", 
    description: "Cierra un canal", 
    category: "moderacion", 
    aliases: ["cerrar"], 
    cooldown: 5, 
    syntax: "lock", 
    permissions: ["MANAGE_CHANNELS"], 
    owner: false, 
    run: async (client, message, args) => {
        

  
      
      
    try {
      

    const role2 = message.guild.roles.everyone

    await message.channel.permissionOverwrites.edit(role2, {
            SEND_MESSAGES: false,
    })
      
    await message.channel.send(`Se bloqueo el canal -> ㅤ**${message.channel.name}**`)
      
      
   }catch(e){
      message.channel.send(e)
    }
      
      
      
      
      }
}
