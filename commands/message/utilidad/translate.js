const { Client, Message, MessageEmbed, discord } = require("discord.js")
const translate = require('@iamtraction/google-translate');

module.exports = {
    name: "translate",
    description: "Traduce lo que quieras",
    category: "utilidad",
    aliases: ["traductor"],
    syntax: "translate <lenguage> <text>",
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args, config) => {





        const lenguage = args[0]
        if (!lenguage) return message.channel.send(config.mal + ` Deberias poner un idioma , ¿No? , te recuero que debes poner la inicial del lenguage , como __en__ ingles  o __es__ español  `);

        const text = args.slice(1).join(" ")

        if (!text) return message.channel.send(config.mal + ` Inserta texto porfavor`);

        translate(text, {
            to: lenguage

        }).then(res => {
            const embed = new MessageEmbed()

                .setTitle('Traductor')
                .addFields(
                    { name: 'Texto', value: `\`\`\`${text}\`\`\``, inline: true },
                    { name: 'Traduccion', value: `\`\`\`${res.text}\`\`\``, inline: true }
                )
                .setColor("RANDOM")

            message.channel.send({ embeds: [embed] });

        })













    }
}