const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emojilist')
        .setDescription('Lista con informacion sobre tus emojis'),
    async execute(interaction, client, args) {



     const emojiList = interaction.guild.emojis.cache.map((e, x) => `${x} = ${e} | ${e.name}`).join("\n");
      
      
      const embed = new MessageEmbed()
        .setTitle(`Emojis del servidor`)
        .setColor("RANDOM")
        .setDescription(emojiList)

      interaction.reply({ embeds: [embed] })
      
      

        
    }
};