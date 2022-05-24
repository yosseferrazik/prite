const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcat')
        .setDescription('¿ Te gustan los gatos  ?'),
    async execute(interaction, client, args) {


        const url = 'https://aws.random.cat/meow';
        let image;

        const { data } = await axios.get(url);
        image = data.image;
        const embed = new MessageEmbed()
            .setImage(image);
        await interaction.followUp({ embeds: [embed] });




        interaction.editReply({ embeds: [gato] });


    }
};