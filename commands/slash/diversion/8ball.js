const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Te hago una prediccion')
        .addStringOption(option => option.setName("pregunta").setDescription("Preguntame algo").setRequired(true)),
    async execute(interaction, client, args) {

        const question = interaction.options.getString("pregunta")

        let list = [
            'Si', 'N0', 'Puede ser', 'Lo dudo', 'Arriba españa', 'XD ok no', 'No lo creo', 'La respuesta es evidente ', 'La respuesta esta en tu corazon', 'hmmmmmmm... lo siento pero no , chupala  ', 'jaj te gusta el pene '];



        var rand = list[Math.floor(Math.random() * list.length)];
        const embed = new MessageEmbed()
            .setTitle(":8ball: Dice que...")
            .setDescription(rand)
            .setColor("RANDOM")
        interaction.reply({embeds:[embed]})

    }
};