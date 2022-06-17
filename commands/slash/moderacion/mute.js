const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const ms = require("ms")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Aisla a un usuario pesado')
        .addUserOption(option => option.setName("miembro").setDescription("El miembro que quieres mutear").setRequired(true))
        .addStringOption(option => option.setName("tiempo").setDescription("Por cuando lo bas a mutear").setRequired(true))
        .addStringOption(option => option.setName("razón").setDescription("Porque lo quieres mutear").setRequired(true)),
    async execute(interaction, client, args) {

        const user = interaction.options.getUser("miembro")
        const tiempo = interaction.options.getString("tiempo")
        const razon = interaction.options.getString("razón")

        let permisos = interaction.member.permissions.has("ADMINISTRATOR")
        if (!permisos) return interaction.reply('Te faltan permisos')

        const member = await interaction.guild.members.fetch(user.id)
        if (member.isCommunicationDisabled()) return interaction.reply('Este miembro ya esta aislado/muteado')

        const time = ms(tiempo)
        await member.timeout(time , time)

        const embed = new MessageEmbed()
        .setTitle(`${user.tag} Fue aislado correctamente`)
        .setDescription(`Tiempo: **${tiempo}** n\ Razon: **${razon}**`)
        .setColor("RANDOM")
        interaction.reply({embeds:[embed]})

    }
};