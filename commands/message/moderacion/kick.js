const Discord = require('discord.js');

module.exports = {

    name: "kick",
    aliases: ["expulsar"],
    description: "Expulsa a un miembro , este podra volver con una nueva invitacion",
    category: "moderacion",
    cooldown: 5,
    syntax: "kick {usuario}[razon]",
    permissions: ["KICK_MEMBERS"],

    run: async (client, message, args) => {

        try {
            const member = message.mentions.members.first();


            if (!args[0]) return message.reply(`<:mal:977661656937168926> ¿ A quien quieres expulsar ?`);

            if (!member) return message.reply(`<:mal:977661656937168926> No logro encontrar al usuario que buscas`);

            if (member.id === message.author.id)
                return message.reply(`<:mal:977661656937168926> No te puedes expulsar`);

            if (message.member.roles.highest.position < member.roles.highest.position)
                return message.reply(
                    `<:mal:977661656937168926> No puedes expulsar a quien tiene un rol mas alto que el tuyo...`
                );

            if (!member.kickable) return message.reply(`<:mal:977661656937168926>No puedo expulsar a este usuario`);

            return (
                (await member.kick()) +
                message
                    .reply({
                        content: `<:martillo:977666678932508734> ${member} Fue expulsado`,
                    })

            );
        } catch (err) {
            message.reply(`<:mal:977661656937168926> awww a pasado algo inesperado -> ${err}`)
        }
    }
};