const { Client, Message, MessageEmbed, discord } = require("discord.js")

const wtf = require('wtf_wikipedia')
module.exports = {
    name: "wikipedia",
    description: "Busca algo en la wikipedia",
    category: "utilidad",
    aliases: ["wiki"],
    syntax: "wiki <palabra>",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {

        let busqueda = args.join(' ')
        if (!busqueda) return message.channel.send(`<:mal:977661656937168926>  Inserta palabra`)
        wtf.fetch(busqueda, 'es').then(doc => {
            let info1 = doc.sentences(1).text()

            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(doc.json().title)

            if (!info1) {
                embed.setDescription(doc.sentences(0).text())
            } else {
                embed.setDescription(doc.sentences(0).text() + ' ' + doc.sentences(1).text())
            }

            message.channel.send({ embeds: [embed] })
        }).catch(err => console.log(err))



    }
}