const { MessageEmbed, Client, Message, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");
module.exports = {
    name: "t2",
    description: "",
    run: async (client, message, args, config) => {

        const commands = (category) => {
            return client.commands.filter((cmd) => cmd.category === category).map((cmd) => `> **${config.prefix}${cmd.syntax}** : ${cmd.description} \n`);
        };



        const row = new MessageActionRow()
            .addComponents(

                new MessageSelectMenu()
                    .setCustomId("menu")
                    .setPlaceholder('Haz click')
                    .setMinValues(0)
                    .setMaxValues(1)
                    .addOptions([
                        {
                            label: "Configuracion",
                            description: "Lista de comandos de moderacion",
                            value: "configuracion",
                            emoji: "⚙️"
                        },
                        {
                            label: "Diversion",
                            description: "Lista de comandos de diversion",
                            value: "diversion",
                            emoji: "🎱"
                        },
                        {
                            label: "Imagenes",
                            description: "Lista de comandos relacionados con imagenes",
                            value: "imagen",
                            emoji: "🖼️"
                        },
                        {
                            label: "Informacion",
                            description: "Consigue informacion sobre algo ",
                            value: "informacion",
                            emoji: "ℹ️"
                        },
                        {
                            label: "Moderacion",
                            description: "Manten tu servidor en orden",
                            value: "moderacion",
                            emoji: "🔨"
                        },
                        {
                            label: "Utilidad",
                            description: "Pocos comandos, pero muy utiles",
                            value: "utilidad",
                            emoji: "🛠️"
                        }

                    ]),
            )

        const embed = new MessageEmbed()       
.setTitle('Tu bot multifunciones de confianza')
            .setDescription(`Soy Prite un bot multifunciones con mas de 45 comandos unicos .`)
            .addField('Links', '> [Top.GG](https://top.gg/bot/905198577150738482) \n> [Invitacion](https://dsc.gg/prite)')
            .setThumbnail(client.user.displayAvatarURL())
            .setColor("RANDOM")

        const m = await message.channel.send({ embeds: [embed], components: [row] })
        const ifilter = i => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })

        collector.on("collect", async i => {

            if (i.values[0] === "configuracion") {
                await i.deferUpdate()
                const current = client.categories[1];
                const items = commands(current);

                const configuracion = new MessageEmbed()
                    .setTitle(`⚙️ **${current.toUpperCase()} [${items.length}]**`)
                    .setDescription(`Configura tu servidor con estos comandos`)
                    .addField(`ㅤ`, ` ${items.join("")}`, false)
                    .setColor("BLURPLE")

                i.editReply({ embeds: [configuracion] })
            }

            if (i.values[0] === "diversion") {
                await i.deferUpdate()
                const current = client.categories[2];
                const items = commands(current);

                const diversion = new MessageEmbed()
                    .setTitle(`🎱 **${current.toUpperCase()} [${items.length}]**`)
                    .setDescription(`¿ Te lo quieres pasar bien ? Usa uno de estos comandos`)
                    .addField(`ㅤ`, ` ${items.join("")}`, false)
                    .setColor("BLURPLE")

                i.editReply({ embeds: [diversion] })
            }

            if (i.values[0] === "imagen") {
                await i.deferUpdate()
                const current = client.categories[3];
                const items = commands(current);

                const imagenes = new MessageEmbed()
                    .setTitle(`🖼️ **${current.toUpperCase()} [${items.length}]**`)
                    .setDescription(`¿ Edito tu imagen ? Hagamos momos :v`)
                    .addField(`ㅤ`, ` ${items.join("")}`, false)
                    .setColor("BLURPLE")

                i.editReply({ embeds: [imagenes] })
            }

            if (i.values[0] === "informacion") {
                await i.deferUpdate()
                const current = client.categories[4];
                const items = commands(current);

                const informacion = new MessageEmbed()
                    .setTitle(`ℹ️ **${current.toUpperCase()} [${items.length}]**`)
                    .setDescription(`Todo tipo de informacion a tu alcanze`)
                    .addField(`ㅤ`, ` ${items.join("")}`, false)
                    .setColor("BLURPLE")

                i.editReply({ embeds: [informacion] })
            }
            if (i.values[0] === "moderacion") {
                await i.deferUpdate()
                const current = client.categories[5];
                const items = commands(current);

                const moderacion = new MessageEmbed()
                    .setTitle(`🔨 **${current.toUpperCase()} [${items.length}]**`)
                    .setDescription(`Seguridad ante todo , manten a los trolls alejados de tu servidor`)
                    .addField(`ㅤ`, ` ${items.join("")}`, false)
                    .setColor("BLURPLE")

                i.editReply({ embeds: [moderacion] })
            }
            if (i.values[0] === "utilidad") {
                await i.deferUpdate()
                const current = client.categories[6];
                const items = commands(current);

                const moderacion = new MessageEmbed()
                    .setTitle(`🛠️ **${current.toUpperCase()} [${items.length}]**`)
                    .setDescription(`Calidad > Cantidad`)
                    .addField(`ㅤ`, ` ${items.join("")}`, false)
                    .setColor("BLURPLE")

                i.editReply({ embeds: [moderacion] })
            }

        })

    }
}