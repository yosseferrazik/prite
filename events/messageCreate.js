const fs = require("fs");
const config = require(`../settings/config.json`);
const { Client, Message, MessageEmbed, Collection } = require("discord.js")
const discord = require("discord.js")
const GuildSettings = require("../models/settings.js")
const antilinkData = require("../models/antilinks.js");
const Discord = require("discord.js");

module.exports = {
    name: 'messageCreate',
    async execute(client, message) {


        // Antilinks

        const antilink = await antilinkData.findOne({
            GuildID: message.guild.id,
        });
        if (antilink) {
            if (
                message.content.match("https://") ||
                message.content.match("discord.gg") ||
                message.content.match("www.")
            ) {
                message.delete();
                message.channel
                    .send("No links ")
                    .then((msg) => {
                        let time = "2s";
                        setTimeout(function() {
                            msg.delete();
                        }, ms(time));
                    });
            }
        }


        //Prefix personalizado

        let storedSettings = await GuildSettings.findOne({
            GuildID: message.guild.id,
        });
        if (!storedSettings) {
            const newSettings = new GuildSettings({
                GuildID: message.guild.id,
            });
            await newSettings.save().catch((e) => {
                console.log(e);
            });
            storedSettings = await GuildSettings.findOne({ GuildID: message.guild.id });
        }
        const prefix = storedSettings.Prefix;

        if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
            return message.channel.send(
                `¡ Hola **${message.author.tag}** ! Mi prefix en este servidor es **${prefix}** `
            );
        }

        // General


        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if (!command) return
        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
        if (!cmd) return;






        if (!client.cooldowns.has(cmd.name)) {
            client.cooldowns.set(cmd.name, new discord.Collection());
        }
        let now = Date.now();
        let timeStamp = client.cooldowns.get(cmd.name) || new Collection();
        let cool = cmd.cooldown || 5;
        let userCool = timeStamp.get(message.author.id) || 0;
        let estimated = userCool + cool * 1000 - now;

        if (userCool && estimated > 0) {
            let cool = new discord.MessageEmbed()
                .setDescription(`Porfavor espera ${(estimated / 1000).toFixed()}s para volver a usar ${cmd.name} .`)
            return (await message.reply({ embeds: [cool] })
                .then(msg => { setTimeout(() => msg.delete().catch(() => null), estimated) })
            )
        }

        timeStamp.set(message.author.id, now);
        client.cooldowns.set(cmd.name, timeStamp);


        try {

            if (cmd.owner && message.author.id !== client.config.ownerID) {
                return message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setColor("RED")
                        .setFooter("ERROR")
                        .setTitle("No puedes ejecutar este comando")
                        .setDescription("Deberias ser owner para ejecutar este comando")]
                })
            }

            if (cmd.permissions && cmd.permissions.length > 0 && !message.member.permissions.has(cmd.permissions)) {
                return message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setColor("RED")
                        .setFooter("ERROR")
                        .setTitle("No puedes ejecutar este comando")
                        .setDescription("No tienes suficientes permisos")]
                })
            }

            if (cmd) {
                await cmd.run(client, message, args);
            }

        } catch (error) {
            console.log("ERROR: " + error)
        }

    },
};
