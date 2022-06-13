const { Client, Message, MessageEmbed, Discord } = require("discord.js")

module.exports = {
    name: "dm",
    description: "Habla entre miembros de tu grupo por dm",
    category: "moderacion",
    aliases: ["directmessage"],
    syntax: "dm <id de persona> <mensaje>",
    permissions: ["ADMINISTRATOR"], 
    cooldown: 5,
    run: async (client, message, args) => {

        const userid = args[0];
        if (!userid) {
            return message.channel.send("<:mal:977661656937168926> Inserta id");
        }
        const msg = args.slice(1).join(" ");
        if (!msg) {
            return message.channel.send("<:mal:977661656937168926> ¿Y el mensaje?");
        }
        const user1 = client.users.cache.get(`${userid}`);
        const embed = new MessageEmbed()
            .setTitle(`De parte de ${message.author.tag}`)
            .setDescription(`${msg}`)
            .setColor("RANDOM");

        user1.send({ embeds: [embed] });


    }
}