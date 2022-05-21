const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "purge",
    description: "Elimina los mensajes que le pidas",
    category: "moderacion",
    aliases: ["clear"],
    cooldown: 5,
    syntax: "purge {numero}",
    permissions: ["MANAGE_MESSAGES"],
    owner: false,
    run: async (client, message, args) => {
        /**
         * 
         * @param {Client} client 
         * @param {Message} message 
         */

        const input = args[0];


        try {

            if (!input) {
                return message.channel.send({ content: "Inserta un numero" })
            }

            if (isNaN(input)) {
                return message.channel.send({ content: 'Formato invalido' })
            }

            if (input < 0) {
                return message.channel.send({ content: 'Dame un numero positivo' })

            }

            message.channel.messages.channel.bulkDelete(input)
            message.channel.send({ content: `Se borraron ${input} mensajes` }).then((msg) => {
                msg.react("✅")
                setTimeout(() => {
                    msg.delete();
                }, 8000)


            })

        } catch (err) {
            message.reply(`awww a pasado algo inesperado -> ${err}`)
        }






    }
}
