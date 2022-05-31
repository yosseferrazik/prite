const { Client, Message, MessageEmbed } = require("discord.js");
const model = require("../../../models/antilinks.js");
const mongoose = require("mongoose")

module.exports = {
    name: "antilinks",
    description: "¿ Te molestan los links ?¡ Usame !",
    category: "configuracion",
    aliases: ["links", "link"],
    cooldown: 5,
    syntax: "antilinks <on|off>",
    permissions: ["ADMINISTRATOR"],
    owner: false,
    run: async (client, message, args) => {

        /**
         * 
         * @param {Client} client 
         * @param {Message} message 
         */


if(!args[0]) {
    message.channel.send(`<:mal:977661656937168926> Hm... elije On o Off `)
}


        if (args[0] === "On" || args[0] === "on") {
            const data = await model.findOne({
                GuildID: message.guild.id,
            });

            if (data) {
                await model.findOneAndRemove({
                    GuildID: message.guild.id,
                });

                message.channel.send(`Barrera antilinks activada`);

                let newData = new model({
                    GuildID: message.guild.id,
                });
                newData.save();
            } else if (!data) {
                message.channel.send(`Barrera antilinks activa`);

                let newData = new model({
                    GuildID: message.guild.id,
                });
                newData.save();
            }
        } else if (args[0] === "off" || args[0] === "Off") {
            const data2 = await model.findOne({
                GuildID: message.guild.id,
            });

            if (data2) {
                await model.findOneAndRemove({
                    GuildID: message.guild.id,
                });

                return message.channel.send(`Se desactivo la barrera antilinks`);
            } else if (!data2) {
                return message.channel.send(`<:mal:977661656937168926> No estaba activada`);
            }
        } 
        }
    }