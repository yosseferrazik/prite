const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "shutdown",
    description: "Tengo sueño",
    category: "bot",
    aliases: ["sd"],
    syntax: "shutdown",
    cooldown:2,
    owner: true ,
    run: async (client, message, args) => {

    message.channel.send("Me voy a dormir...").then((m) => {
      client.destroy();
    });
        

    }
}