const { Client, Message, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
    name: "t2",
    description: "",
    category: "",
    aliases: [""],
    syntax: "",
    cooldown: "",
    owner: "",
    permissions: [""],
    run: async (client, message, args, config) => {
        const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(client.commands));

        const commands = (category) => {
            return client.commands.filter((cmd) => cmd.category === category).map((cmd) => `\`${cmd.name}\``);
        };




        const row = new MessageActionRow()
            .addComponents(

                new MessageSelectMenu()
                    .setCustomId("menu")
                    .setMaxValues(1)
                    .addOptions([
                        {
                            label: "Hola",
                            description: "Hola , ¿ como estas ?",
                            value: "hola"
                        }
                    ])


            )
        const embed = new MessageEmbed()
            .setTitle('MENU')
            .setColor("RANDOM")

        const m = await message.channel.send({ embeds: [embed], components: [row] })
        const ifilter = i => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })
        collector.on("collect", async i => {
            if (i.values[0] === "hola") {
                await i.deferUpdate()
                const current = client.categories[1];
                const items = commands(current);
                i.editReply(`**${current.toUpperCase()} [${items.length}]**`, ` ${items.join("  ,  ")}\nㅤ`)
            }
        })

    }
}