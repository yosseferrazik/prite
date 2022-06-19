const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "topusers",
    description: "En donde estoy",
    category: "informacio",
    aliases: ["top-user"],
    syntax: "topuser",
    cooldown: 7,
    permissions: [""],
    run: async (client, message, args, config) => {


        const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10);

        const description = guilds.map((guild, index) => {
            return `${index + 1}) ${guild.name} -> ${guild.memberCount} members`
        }).join(`\n`)

        const embed = new MessageEmbed()
            .setTitle('Top servidores')
            .setDescription(description)

        message.channel.send({ embeds: [embed] })


    }
}