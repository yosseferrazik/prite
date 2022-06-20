const { MessageEmbed, Client, Message, MessageActionRow, MessageButton } = require("discord.js");
const config = require('../../../settings/config.json');

module.exports = {
    name: "help",
    description: `¿ Realmente necesitas ayuda sobre este comando ?`,
    aliases: ["h"],
    category: "informacion",
    syntax: "help [nombre del comando]",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    owner: false,
    run: async (client, message, args, config) => {


        /**
         * 
         * @param {Client} client 
         * @param {Message} message 
         */




        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Invitacion')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=905198577150738482&permissions=1644971949559&scope=bot%20applications.commands')
                    .setStyle('LINK')
                    .setEmoji('987043173413031936'),


                new MessageButton()
                    .setLabel('Top.GG')
                    .setURL('https://top.gg/bot/905198577150738482')
                    .setStyle('LINK')
                    .setEmoji('987043034871001228')
            );


        try {


            if (args[0]) {
                const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(client.commands));
                if (!cmd) {
                    message.channel.send("Ese comando no existe")
                }
                const help = new MessageEmbed()
                    .setTitle(config.pregunta + ` Ayuda`)
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter('<Requerido> y [optional]')
                    .setColor(`${config.color}`)
                if (cmd) {
                    help.addField(`*Nombre*`, `\`${cmd.name}\``)
                }
                if (cmd.description) {
                    help.addField(`*Descripcion*`, `\`${cmd.description}\``)
                }
                if (cmd.syntax) {
                    help.addField(`*Uso*`, `\`${client.config.prefix}${cmd.syntax}\``)
                }
                if (cmd.permissions) {
                    help.addField(`*Permisos*`, `\`${cmd.permissions}\``)
                }
                if (cmd.category) {
                    help.addField(`*Categoria*`, `\`${cmd.category.toUpperCase()}\``)
                }
                message.channel.send({ embeds: [help] })

            } else if (!args[0]) {
                const embed = new MessageEmbed()
                    .setColor(`${config.color}`)
                    .setTitle(config.pregunta + 'Ayuda')
                    .setDescription("Usa `p.help [nombre de un comando]` para ver la informacion de un comando en especifico")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter('<Importante> y [optional]');

                const commands = (category) => {
                    return client.commands.filter((cmd) => cmd.category === category).map((cmd) => `\`${cmd.name}\``);
                };
                for (let i = 0; i < client.categories.length; i += 1) {
                    const current = client.categories[i];
                    const items = commands(current);
                    embed.addField(`**${current.toUpperCase()} [${items.length}]**`, ` ${items.join("  ,  ")}\nㅤ`);
                }


                message.channel.send({ embeds: [embed], components: [row] });
            }

        } catch (error) {
            message.channel.send("Paso algo inesperado");
            console.log("ERROR :: " + error)
        }
    }
}