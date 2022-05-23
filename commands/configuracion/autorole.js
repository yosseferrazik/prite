const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "autorole",
    description: "Otorgale roles a tus nuevos miembros",
    category: "configuracion",
    aliases: ["autorole","ar"],
    syntax: "avatar [mencion]",
    run: async (client, message, args) => {

        const user = message.mentions.users.first() || message.author;

        const avatarEmbed = new MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`La foto de perfil de ${user.username}`)
            .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`);


        message.channel.send({ embeds: [avatarEmbed] });

    }
}