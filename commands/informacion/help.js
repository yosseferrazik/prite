const { MessageEmbed, Client, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    description: `Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`,
    aliases: ["h"],
    category: "informacion",
    syntax: "help [nombre del comando]",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    owner: false,
    run: async (client, message, args) => {


        /**
         * 
         * @param {Client} client 
         * @param {Message} message 
         */

        try {



            if (args[0]) {
                const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(client.commands));
                if (!cmd) {
                    message.channel.send("Ese comando no existe")
                }
                const help = new MessageEmbed()
                    .setTitle(`❓ Ayuda`)
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter('<Requerido> y [optional]')
                    .setColor("RANDOM")
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
                    .setColor('RANDOM')
                    .setTitle('❓ Ayuda')
                    .setDescription("Usa `help [nombre de un comando]` para ver la informacion de un comando en especifico")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setImage("https://media.discordapp.net/attachments/950435266139660348/955761792716521552/Screenshot_2022-03-22_10.34.54.png")
                    .setTimestamp()
                    .setFooter('<Importante> y [optional]');

                const commands = (category) => {
                    return client.commands.filter((cmd) => cmd.category === category).map((cmd) => `\`${cmd.name}\``);
                };
                for (let i = 0; i < client.categories.length; i += 1) {
                    const current = client.categories[i];
                    const items = commands(current);
                    embed.addField(`**${current.toUpperCase()} [${items.length}]**`, ` ${items.join("  ,  ")}\nㅤ`);
                }


                message.channel.send({ embeds: [embed] });
            }

        } catch (error) {
            message.channel.send("Paso algo inesperado");
            console.log("ERROR :: " + error)
        }
    }
}