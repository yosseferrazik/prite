const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping", 
    description: "Responde con pong", 
    category: "info", 
    aliases: ["pong"], 
    cooldown: 5, 
    syntax: "ping", 
    permissions: ["SEND_MESSAGES"], 
    owner: false, 
    run: async (client, message, args) => {
  
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   */


    try {

      const embed = new MessageEmbed()
        .setTitle(`Pong!`)
        .setFooter(`${message.author.tag}`, message.author.avatarURL())
        .setColor("RANDOM")
        .setDescription(`Ping es la latencia entre el bot y discord pero la latencia api es la latencia entre el cliente y la api `)
        .addField("Ping", `${message.createdTimestamp - message.createdTimestamp}ms`)
        .addField("Latencia de la API", `${Math.round(client.ws.ping)}ms`)
      message.channel.send({ embeds: [embed] })

    } catch (error) {
      message.channel.send("Hubo un error");
      console.log("ERROR :: " + error)
    }

  }
}