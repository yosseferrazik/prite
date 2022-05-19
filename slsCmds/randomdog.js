const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomdog')
        .setDescription('¿ Te gustan los perros  ?'),
    async execute(interaction, client, args) {


    await interaction.deferReply();
		const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
    const perro = new MessageEmbed()

    .setColor('RANDOM')
    .setTitle(`Que adorable :3`)
    .setImage(url);
         
      
      
  
		interaction.editReply({ embeds: [perro] });
      
      
    }
};