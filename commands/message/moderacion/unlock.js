const util = require('node:util');
const { Client, Intents, Formatters, Permissions } = require('discord.js')

const discord = require("discord.js")
module.exports = {
    name: "unlock", 
    description: "Hace publico un canal", 
    category: "admin", 
    aliases: ["abrir"], 
    cooldown: 5, 
    syntax: "abrir", 
    permissions: ["MANAGE_CHANNELS"], 
    owner: false, 
    run: async (client, message, args) => {
        


    try {
      

      
   const role = message.guild.roles.everyone
   await message.channel.permissionOverwrites.edit(role, {
           SEND_MESSAGES: true
  })
      
   await message.channel.send(`Se desbloqueo el canal ->ㅤ **${message.channel.name}**`)

    }catch(e){
        message.channel.send(e)
    }
    
      
      
      
      
      }
}
