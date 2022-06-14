const { Client, Message, MessageEmbed, Discord } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: "mute-beta",
    description: "Haz que ese miembro pesado se calle de una vez",
    category: "moderacion",
    aliases: ["callate"],
    syntax: "callate <mencion> ",
    permissions: ["MANAGE_ROLES"],
    cooldown: 5,
    run: async (client, message, args, config) => {

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(2).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === 'Muteado')

        if (!member) return message.reply(config.mal + 'Menciona al usuario');
        if (!time) return message.reply(config.mal + 'Por cuando lo quieres mutear');

        if (member.id === message.author.id) return message.reply(config.mal + 'No te mutees a ti mismo bobolon')
        if (member.id === client.id) return message.reply(config.mal + ' ¿Que hize mal :(?')

        if (!role) {
            try {
                message.channel.send('No hay mute rol.. creando uno..')
                let muterole = await message.guild.roles.create({
                    data: {
                        name: 'Muteado',
                        permissions: [],
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(config.bien + " Se creo el rol exitosamente")
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(role => role.name === 'Muteado')
        if (member.roles.cache.has(role2)) return message.reply(config.mal + ' Este usuario ya fue muteado')

        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply(config.mal + ' No puedes mutear este miembro')


        await member.roles.add(role2)
        message.channel.send(config.mal + ` ${member.user.username} fue muteado por ${ms(ms(time))} \nRazon: ${reason}`)

        setTimeout(() => {
            member.roles.remove(role2)
        }, ms(time))



    }
}