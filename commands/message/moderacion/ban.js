const Discord = require('discord.js');

module.exports = {

    name: "ban",
    aliases: ["prohibir"],
    description: "Condena a cadena perpetua a un miembro , con este comando conseguiras expulsar a un miembro para siempre",
    category: "moderacion",
    cooldown: 5,
    syntax:"ban {usuario}[razon]",
    permissions: ["BAN_MEMBERS"], 

    run: async (client, message, args) => {

   try {
    const member = message.mentions.members.first();


    if (!args[0]) return message.reply(`<:mal:977661656937168926> ¿ A quien quieres banear ?`);

    if (!member) return message.reply(`<:mal:977661656937168926> No logro encontrar al usuario que buscas`);

    if (member.id === message.author.id)
      return message.reply(`<:mal:977661656937168926> No te puedes banear`);

    if (message.member.roles.highest.position < member.roles.highest.position)
      return message.reply(
        `<:mal:977661656937168926> No puedes banear a quien tiene un rol mas alto que el tuyo...`
      );

    if (!member.bannable) return message.reply(`<:mal:977661656937168926> No puedo banear a este usuario`);

    return (
      (await member.ban()) +
      message
        .reply({
          content: `<:martillo:977666678932508734> ${member} Fue baneado`,
        })

    );
      } catch(err) {
        message.reply(`<:mal:977661656937168926> awww a pasado algo inesperado -> ${err}`)
      }
    }
};