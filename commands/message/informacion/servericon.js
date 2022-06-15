const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "servericon",
    description: "El icono de tu servidor",
    category: "informacion",
    aliases: ["sicon"],
    syntax: "servericon",
    cooldown:3,
    permissions:[""],
    run: async (client, message, args , config) => {

    const server = message.guild;
    const embed = new MessageEmbed()
      .setTitle(`Icono de ${message.guild.name}`)
      .setDescription(
        `[Link](${server.iconURL({
          size: 2048,
          dynamic: true,
          format: "png",
        })})`
      )
      .setImage(server.iconURL({ size: 2048, dynamic: true, format: "png" }))
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
        

    }
}