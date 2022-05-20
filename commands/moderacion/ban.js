const Discord = require('discord.js');

module.exports = {

    name: "ban",
    aliases: ["prohibir"],
    description: "Condena a cadena perpetua a un miembro , con este comando conseguiras expulsar a un miembro para siempre",
    category: "admin",
    cooldown: 5,
    syntax:"ban {usuario}[razon]",
    permissions: ["BAN_MEMBERS"], 

    run: async (client, message, args) => {

   try {
    const member = message.mentions.members.first();


    if (!args[0]) return message.reply(`¿ A quien quieres banear ?`);

    if (!member) return message.reply(`No logro encontrar al usuario que buscas`);

    if (member.id === message.author.id)
      return message.reply(`No te puedes banear`);

    if (message.member.roles.highest.position < member.roles.highest.position)
      return message.reply(
        `No puedes banear a quien tiene un rol mas alto que el tuyo...`
      );

    if (!member.bannable) return message.reply(`No puedo banear a este usuario`);

    return (
      (await member.ban()) +
      message
        .reply({
          content: `:anger: | ${member} Fue baneado`,
        })
        .then((msg) => {
          setTimeout(() => msg.delete(), 5000);
        })
    );
      } catch(err) {
        message.reply(`awww a pasado algo inesperado -> ${err}`)
      }
    }
};