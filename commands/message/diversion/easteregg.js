
const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "easteregg",
    description: "Un easter egg especial",
    category: "diversion",
    aliases: ["egg"],
    cooldown: 5,
    syntax: "easteregg",
    permissions: [""],
    owner: false,
    run: async (client, message, args) => {
        
        /**
         * 
         * @param {Client} client 
         * @param {Message} message 
         */

        const Embed = new MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`Easter egg`)
            .setImage(`https://i.pinimg.com/originals/6b/8b/b6/6b8bb65266ffdf64980122dd6704cf65.gif`);


        message.channel.send({ embeds: [Embed] });


    }
}