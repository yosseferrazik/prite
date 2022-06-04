const { Client, Message, MessageEmbed, discord } = require("discord.js")
const red = require('reddit-fetch')

module.exports = {
    name: "meme",
    description: "Meme random",
    category: "diversion",
    aliases: ["momazo"],
    syntax: "meme",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args) => {

        red({
            subreddit: 'SpanishMeme',
            sort: 'hot',
            allowNSFW: false,
            allowModPost: false,
            allowCrossPost: false,
            allowVideo: false
        }).then(post => {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(post.title)
                .setImage(post.url)
            if (!post.url) {
                return message.channel.send("No encontre memes :(")
            } else {
                message.channel.send({embeds: [embed]})
            }
        }).catch(() => message.channel.send("Hubo un error"))


    }
}