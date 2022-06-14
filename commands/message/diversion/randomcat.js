const { Client, Message, MessageEmbed, discord } = require("discord.js")
const red = require("reddit-fetch")
module.exports = {
    name: "randomcat",
    description: "Un gato random",
    category: "diversion",
    aliases: ["cats", "gato"],
    syntax: "randomcat",
    run: async (client, message, args) => {

        red({
            subreddit: 'cats',
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
                return message.channel.send("No mas gatos :(")
            } else {
                message.channel.send({embeds: [embed]})
            }
        }).catch(() => message.channel.send("Hubo un error"))



    }
}