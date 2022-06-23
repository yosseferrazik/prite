const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "topservers",
    description: "En donde estoy",
    category: "informacio",
    aliases: ["top-servers"],
    syntax: "topservers",
    cooldown: 7,
    permissions: [""],
    run: async (client, message, args, config) => {


        const guilds = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10);

        const description = guilds.map((guild, index) => {
            return `${index + 1}) ${guild.name} -> ${guild.memberCount} members`
        }).join(`\n`)

        const embed = new MessageEmbed()
            .setTitle('Top 10 servidores')
            .setDescription(description)
            .setFooter({ text: `En ${client.guilds.cache.size} servidores` })
            .setColor('RANDOM')

        message.channel.send({ embeds: [embed] })


    }
}