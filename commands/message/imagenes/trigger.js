const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "trigger",
    description: "¿De mal humor?",
    category: "imagenes",
    aliases: ["puteado"],
    syntax: "trigger <mencion>",
    cooldown:5,
    permissions:["SEND_MESSAGES"],
    run: async (client, message, args) => {

      
    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("<:mal:977661656937168926> Menciona a alguien");
    }
    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

    await message.channel.send({
      files: [
        {
          attachment: `https://some-random-api.ml/canvas/triggered?avatar=${avatar}`,
          name: "file.jpg",
        },
      ],
    });

    }
}