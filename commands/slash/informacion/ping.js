const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('¿ Quieres ver mi ping ?'),
    async execute(interaction, client, args) {

        interaction.reply(`¡ Pong !`)

    }
};