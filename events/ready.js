const config = require(`../settings/config.json`);
const { Client, Message, MessageEmbed } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: 'ready',
    async execute(client, message) {

        let activities = [`${config.prefix}help | @Prite `, "tus calificaciones", ` ${config.prefix}help \ @Prite`, `${client.guilds.cache.size} servidores`];


        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
            const newActivity = activities[randomIndex];

            client.user.setPresence({
                activities: [{
                    name: newActivity,
                    type: "WATCHING"
                }],
                status: "idle"
            })
        }, 5000);








        setInterval(async function() {

            const fetch = require("node-superfetch")
            let user = "TheGreatGQ"

            const uptime = await fetch.get(`https://decapi.me/twitch/uptime/${user}`)
            const avatar = await fetch.get(`https://decapi.me/twitch/avatar/${user}`)
            const viwers = await fetch.get(`https://decapi.me/twitch/viwercount/${user}`)
            const title = await fetch.get(`https://decapi.me/twitch/title/${user}`)
            const game = await fetch.get(`https://decapi.me/twitch/game/${user}`)

            const twitch = require("../models/twitch.js")
            let data = await twitch.findOne({ user: user , titulo: title.body })

            if (uptime.body !== `${user} is offline`) {
                
                const embed = new MessageEmbed()
                    .setAuthor({ "name": `${user}`, "iconURL": `${avatar}` })
                    .setTitle(`${title.body}`)
                    .setThumbnail(`${avatar.body}`)
                    .setURL(`https://twitch.tv/${user}`)
                    .addField("Game", `${game}`, true)
                    .addField("Viwers", `${viwers}`, true)
                    .setColor("RANDOM")
                
                if (!data) {
                    const newdata = new twitch({
                        user: user,
                        titulo: `${title.body}`
                    })
                await client.channels.cache.get("986187620822437908").send({content:`${user} esta en directo`, embeds:[embed]})
                    return await newdata.save()
                }
                if(data.titulo === `${title.body}`) return;

                await client.channels.cache.get("986187620822437908").send({content:`${user} esta en directo`, embeds:[embed]})

                await twitch.findOneAndUpdate({ user: user }, { titulo: title.body })
            }

        }, 120000)







        client.logger.log(`> 🔍 • Estoy en ${client.guilds.cache.size} Servers`, "info");
        client.logger.log(`> ✅ • Online en  ${client.user.username}\n\n======================================`, "success");








    },
}; 