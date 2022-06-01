const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    description: "Responde con pong",
    category: "informacion",
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


            message.channel.send(`\`\`\`asciidoc
            Ping :: ${message.createdTimestamp - message.createdTimestamp} ms 
            Latencia de la API :: ${Math.round(client.ws.ping)}ms
            \`\`\`
            `)

        } catch (error) {
            message.channel.send("Hubo un error");
            console.log("ERROR :: " + error)
        }

    }
}