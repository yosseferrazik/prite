const Discord = require('discord.js');
const { MessageEmbed, Client, Message, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {

    name: "hackban",
    aliases: ["idban", "softban"],
    description: "Condena a cadena perpetua a un miembro , con este comando conseguiras expulsar a un miembro para siempre via ID",
    category: "moderacion",
    cooldown: 5,
    syntax: "hackban {ID}",
    permissions: ["BAN_MEMBERS"],

    run: async (client, message, args , config) => {


        const target = args[0];
        const reason = args.splice(1, args.length).join(' ');

        if (isNaN(target)) return message.reply(config.mal + `¿ Y la ID ?`);


        try {
            message.guild.members.ban(target, { reason: reason.length < 1 ? 'No hubo una razon.' : reason });

 
            await message.channel.send( config.bien + `Se baneo a ${target} de forma exisitosa`);







        } catch (error) { console.log(error) }








    }
};