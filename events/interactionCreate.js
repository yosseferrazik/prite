const discord = require('discord.js')
const { Client, Intents, Collection } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        
        const command = client.slsCommands.get(interaction.commandName);
        if (!interaction.isCommand()) return;
        if (!command) return;

        if (!interaction.guild.me.permissions.has(["SEND_MESSAGES", "EMBED_LINKS"])) {
            const embed = new discord.MessageEmbed()
                .setDescription(`:x: Necesito  \`SEND_MESSAGES\` & \`EMBED_LINKS\` `)
            return await interaction.member.send({ embeds: [embed], ephemeral: true })

        }


        try {
            await command.execute(interaction);

        } catch (error) {
            if (error) console.error(error);
            await interaction.reply({ content: 'Hubo un error ejecutando el comando', ephemeral: true });

        }

    },
};