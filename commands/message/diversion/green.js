const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "green",
    description: "Colorea tu texto de color verde",
    category: "diversion",
    aliases: ["greentext", "gt"],
    syntax: "green <texto>",
    cooldown: 4,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {

        let text = args.join(" ")
        message.channel.send(`\`\`\`diff\n+ ${text}\n\`\`\``)


    }
}