const { Client, Message, MessageEmbed, discord } = require("discord.js")
const { DiscordTogether } = require('discord-together');

module.exports = {
    name: "together",
    description: "Miremos yt juntos",
    category: "utilidad",
    aliases: ["youtube"],
    syntax: "together",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {


        if (!message.member.voice.channelId) {
            return message.channel.send('<:mal:977661656937168926> Unete a un canal de voz primero')
        }
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
            return message.channel.send(`${invite.code}`);
        });

    }
}