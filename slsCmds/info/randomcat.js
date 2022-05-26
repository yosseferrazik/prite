const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcat')
        .setDescription('¿ Te gustan los gatos  ?'),
    async execute(interaction, client, args) {


            const url = 'https://no-api-key.com/api/v1/animals/cat';
            let image;

            try {
                const { data } = await axios.get(url);
                image = data.image;
                const embed = new MessageEmbed()
                .setImage(image);
                await interaction.followUp({ embeds: [embed] });
            } catch(err) {
                console.log(err.stack);
            }


    }
};