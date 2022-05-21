const { Client, Message, MessageEmbed, discord } = require("discord.js")
const fetch = require('node-fetch');

module.exports = {
    name: "randomdog",
    description: "Un perro random",
    category: "entretenimiento",
    aliases: ["dogs", "dog", "perro"],
    syntax: "randomdog",
    run: async (client, message, args) => {

        const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());

        const perro = new MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`Que adorable :3`)
            .setImage(url);





        message.channel.send({ embeds: [perro] });


    }
}