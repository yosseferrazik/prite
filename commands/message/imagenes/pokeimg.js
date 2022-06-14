const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "pokeimg",
    description: "Consigue la imagen de un pokemon",
    category: "imagenes",
    aliases: ["imagen-pokemon","pokeimagen"],
    syntax: "pokeimg <nombre>",
    cooldown:5,
    permissions:["SEND_MESSAGES"],
    run: async (client, message, args , config) => {


    const name = args.join(" ");
    if (!name) {
      return message.channel.send(config.mal + "¿Como se llama tu pokemon?");
    }
    const link = `https://i.some-random-api.ml/pokemon/${name}.png`;
    const embed = new MessageEmbed()
      .setTitle(`${name.toUpperCase()}`)
      .setImage(link)
      .setColor("RANDOM");

    message.channel.send({embeds: [embed]});

    }
}