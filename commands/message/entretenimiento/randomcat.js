const { Client, Message, MessageEmbed, discord } = require("discord.js")
const fetch = require('node-fetch');

module.exports = {
    name: "randomcat",
    description: "Un gato random",
    category: "entretenimiento",
    aliases: ["cats", "gato"],
    syntax: "randomcat",
    run: async (client, message, args) => {

        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        const gato = new MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`Que adorable :3`)
            .setImage(file);





        message.channel.send({ embeds: [gato] });


    }
}