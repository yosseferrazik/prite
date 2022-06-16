const Discord = require('discord.js');

module.exports = {

    name: "ban",
    aliases: ["prohibir"],
    description: "Condena a cadena perpetua a un miembro , con este comando conseguiras expulsar a un miembro para siempre",
    category: "moderacion",
    cooldown: 5,
    syntax:"ban {usuario}[razon]",
    permissions: ["BAN_MEMBERS"], 

    run: async (client, message, args , config) => {

   try {
    const member = message.mentions.members.first();


    if (!args[0]) return message.reply(config.mal + ` ¿ A quien quieres banear ?`);

    if (!member) return message.reply(config.mal + `No logro encontrar al usuario que buscas`);

    if (member.id === message.author.id)
      return message.reply(config.mal + ` No te puedes banear`);

    if (message.member.roles.highest.position < member.roles.highest.position)
      return message.reply(
        config.mal + ` No puedes banear a quien tiene un rol mas alto que el tuyo...`
      );

    if (!member.bannable) return message.reply(config.mal + ` No puedo banear a este usuario`);

    return (
      (await member.ban()) +
      message
        .reply({
          content: config.martillo + ` ${member} Fue baneado`,
        })

    );
      } catch(err) {
        message.reply(config.mal + ` awww a pasado algo inesperado -> ${err}`)
      }
    }
};