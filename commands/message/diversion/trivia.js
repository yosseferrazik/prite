const { Client, Message, MessageEmbed, discord } = require("discord.js")
let questions = [
    {
        title: "Mejor idioma de programacion",
        options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
        correct: 1,
    },

    {
        title: "Mejor NPM",
        options: ["int.engine", "ms", "ws", "discord.js"],
        correct: 4,
    },

    {
        title: "Cual es el mejor comando",
        options: ["8ball", "emoify", "ascii", "flipword"],
        correct: 2,
    },
];







module.exports = {
    name: "trivia",
    description: "¿ Sabes mas que yo ?",
    category: "diversion",
    aliases: [""],
    syntax: "trivia",
    cooldown: 4,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {

        let q = questions[Math.floor(Math.random() * questions.length)];
        let i = 0;
        const mappingOptions = q.options.map((opt) => {
            i++;
            return `${i} - ${opt}`;
        })
        const Embed = new MessageEmbed()
            .setTitle(q.title)
            .setDescription(mappingOptions.join(`\n`))
            .setColor(`GREEN`)

        message.channel.send({ embeds: [Embed] });
            let msgs = await message.channel.awaitMessages(
                (u2) => u2.author.id === message.author.id,
                { time: 15000, max: 1, errors: ["time"] }
            );
            if (parseInt(msgs.first().content) == q.correct) {
                return message.channel.send(`Reespuesta correcta`);
            } else {
                return message.channel.send(`Respuesta incorrecta`);
            }



    }
}