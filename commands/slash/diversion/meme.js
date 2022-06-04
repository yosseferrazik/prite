const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const red = require("reddit-fetch")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Mejores momazos de la historia papus :v '),
    async execute(interaction, client, args) {

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
                return interaction.reply("No encontre memes :(")
            } else {
                interaction.reply({ embeds: [embed] })
            }
            
        })




    }
};