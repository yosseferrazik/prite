const { Client, Message, MessageEmbed, Discord } = require("discord.js")
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    name: "serverinfo",
    description: "Informacion sobre un servidor",
    category: "informacion",
    aliases: ["server"],
    syntax: "serverinfo",
    cooldown: 3,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args, config) => {

        const mention = message.member;
        const afk =
            message.guild.afkChannel === null ? "`None`" : message.guild.afkChannel;
        let servericon = message.guild.iconURL;
        let verifLevels = {
            NONE: "None",
            LOW: "Bajo",
            MEDIUM: "Medio",
            HIGH: "(╯°□°）╯︵  ┻━┻ (Alto)",
            VERY_HIGH: "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Muy alto)",
        };
        let region = {
            brazil: "Brazil",
            "eu-central": "Central Europe",
            singapore: "Singapore",
            "us-central": "U.S. Central",
            sydney: "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            london: "London",
            amsterdam: "Amsterdam",
            hongkong: "Hong Kong",
            russia: "Russia",
            southafrica: "South Africa",
            india: "India",
        };
        const serverembed = new MessageEmbed()
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .setThumbnail(servericon)
            .addField(
                `Informacion general`,
                `Owner: ${message.guild.members.cache.get(message.guild.ownerId)} \nNivel de verificacion: \`${
                verifLevels[message.guild.verificationLevel]
                }\``
            )
            .addField(
                `Informacion`,
                `Canales en total: \`${
                message.guild.channels.cache.size
                }\` \nCanal de texto: \`${
                message.guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size
                }\` \nCanales de voz: \`${
                message.guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size
                }\` \nCanal afk: ${afk} \nAFK Tiempo: \`${
                message.guild.afkTimeout
                } sec\` \nRoles en total: \`${
                message.guild.roles.cache.size
                }\` \nEmojis total: \`${message.guild.emojis.cache.size}\``
            )
            .addField(
                `Informacion sobre los miembros`,
                `Miembros en total: \`${message.guild.memberCount}\` \nHumanos: \`${
                message.guild.members.cache.filter((member) => !member.user.bot).size
                }\` \nBots: \`${
                message.guild.members.cache.filter((member) => member.user.bot).size
                }\``
            )

            .addField(`ID:`, ` ${message.guild.id}`)
            .setColor("RANDOM")

        message.channel.send({ embeds: [serverembed] });


    }
}