const { Client, Message, MessageEmbed, discord } = require("discord.js")
const moment = require("moment");

module.exports = {
    name: "userinfo",
    description: "Consigue informacion sobre un usuario",
    category: "informacion",
    aliases: ["user"],
    syntax: "userinfo <mencion>",
    cooldown: 3,
    permissions: ["VIEW_AUDIT_LOG"],
    run: async (client, message, args, config) => {




        const permissions = {
            "ADMINISTRATOR": "Administrator",
            "MANAGE_GUILD": "Manage Server",
            "MANAGE_ROLES": "Manage Roles",
            "MANAGE_CHANNELS": "Manage Channels",
            "KICK_MEMBERS": "Kick Members",
            "BAN_MEMBERS": "Ban Members",
            "MANAGE_NICKNAMES": "Manage Nicknames",
            "MANAGE_EMOJIS": "Manage Emojis",
            "MANAGE_WEBHOOKS": "Manage Webhooks",
            "MANAGE_MESSAGES": "Manage Messages",
            "MENTION_EVERYONE": "Mention Everyone"
        }
        const mention = message.mentions.members.first() || message.member;
        const nick = mention.nickname === null ? "None" : mention.nickname;
        const roles = mention.roles.cache.get === "" ? "None" : mention.roles.cache.get;
        const usericon = mention.user.avatarURL;
        const mentionPermissions = mention.permissions.toArray() === null ? "None" : mention.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
            else;
        }
        var flags = {
            "": "Ninguno",
            "DISCORD_EMPLOYEE": "Empleado de discord",
            "DISCORD_PARTNER": "Partner de discord",
            "BUGHUNTER_LEVEL_1": "Bug hunter (LVL 1)",
            "BUGHUNTER_LEVEL_2": "Bug Hunter (LVL 2)",
            "HYPESQUAD_EVENTS": "Eventos Hypesquad",
            "HOUSE_BRILLIANCE": "HypeSquad Brilliance",
            "HOUSE_BRAVERY": "HypeSquad Bravery",
            "HOUSE_BALANCE": "HypeSquad Balance",
            "EARLY_SUPPORTER": "Partidario inicial",
            "TEAM_USER": "Team User",
            "VERIFIED_BOT": "Bot verificado",
            "EARLY_VERIFIED_DEVELOPER": "Desarrollador de bots inicial"
        };
        var bot = {
            "true": "Si , es un bot",
            "false": "No, es humano"
        };
        const userlol = new MessageEmbed()
            .setAuthor(`Informacio sobre`, mention.user.avatarURL())
            .setThumbnail(usericon)
            .addField(`Informacion general`, `Nombre: \`${mention.user.username}\` \nTag: \`${mention.user.discriminator}\` \nNickname: \`${nick}\``)
            .addField(`Vista general`, `Insignia: \`${flags[mention.user.flags.toArray().join(", ")]}\`\nEs un bot : \`${bot[mention.user.bot]}\``)
            .addField(`Informacion relacionada con el servidor`, `Roles: <@&${mention._roles.join(">  <@&")}> \nKey Permisos: \`${finalPermissions.join(', ')}\``)
            .addField(`Informacion miscelania`, `Cuenta creada: \n\`${moment(mention.user.createdAt).format("YYYY-MM-DD")}\` \nSe unio a este server: \n\`${moment(mention.joinedAt).format("YYYY-MM-DD")}\``)
            .setThumbnail(mention.user.avatarURL())
            .addField(`ID:`,`${mention.user.id}` )
            .setColor("RANDOM");
        message.channel.send({ embeds: [userlol] })






    }
}