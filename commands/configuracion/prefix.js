const { MessageEmbed, Client, Message } = require("discord.js")
const GuildSettings = require("../../models/settings.js")

module.exports = {
	name: "prefix",
	description: "Cambia el prefix del bot",
	category: "configuracion",
	syntax: "prefix <nuevo prefix>",
	permissions: ["ADMINISTRATOR"],

	/**
	 * @param {Client} client 
	 * @param {Message} message 
	 */

	run: async (client, message, args) => {
		if (!args[0]) return message.channel.send("¿ Y el prefix ?")
		if (args[0].length > 5) return message.channel.send("El prefix no debe ser mayor a 5 caracteres")
    
		try {

			let storedSettings = await GuildSettings.findOne({ GuildID: message.guild.id });
			if (!storedSettings) {
				// If there are no settings stored for this guild, we create them and try to retrive them again.
				const newSettings = new GuildSettings({ GuildID: message.guild.id, });
				await newSettings.save().catch((e) => {
					console.log(e);
				});
				storedSettings = await GuildSettings.findOne({ GuildID: message.guild.id });
			}

			storedSettings.Prefix = args[0];
			await storedSettings.save().catch((e) => {
				console.log(e);
			});

			message.channel.send({
				embeds: [new MessageEmbed()
					.setTitle("Prefix cambiado exitosamente")
					.setDescription(`Se cambio el prefix a : **${args[0]}**`)
					.setColor("RANDOM")
					.setFooter("Aprendi a usar MongoDB con este comando xD GG EZ")]
			})

		} catch (error) {
			message.channel.send("Some Error Occured");
			console.log("ERROR :: " + error)
		}

	}
}