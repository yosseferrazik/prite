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
                status: "online"
            })
        }, 5000);









        client.logger.log(`> 🔍 • Estoy en ${client.guilds.cache.size} Servers`, "info");
        client.logger.log(`> ✅ • Online en  ${client.user.username}\n\n======================================`, "success");








    },
}; 