const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcat')
        .setDescription('¿ Te gustan los gatos  ?'),
    async execute(interaction, client, args) {


    await interaction.deferReply();
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    const gato = new MessageEmbed()

    .setColor('RANDOM')
    .setTitle(`Que adorable :3`)
    .setImage(file);
         
      
      
  
		interaction.editReply({ embeds: [gato] });
      
      
    }
};