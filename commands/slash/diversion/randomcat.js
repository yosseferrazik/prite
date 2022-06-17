const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const red = require("reddit-fetch")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcat')
        .setDescription('Un gato para cada dia'),
    async execute(interaction, client, args) {

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
                return interaction.reply("No encontre mas fotos de gatos :(")
            } else {
                interaction.reply({ embeds: [embed] })
            }
            
        })


    }
};