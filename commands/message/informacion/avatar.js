const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "avatar",
    description: "Te proporciona tu foto de perfil o la del usuario que menciones",
    category: "informacion",
    aliases: ["pfp"],
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