const Discord = require('discord.js');
const config = require('../../../settings/config.json');
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch');

module.exports = {

        name: 'clyde',
        description: 'Clyde dice...',
        aliases: ["clyde"],
        syntax: 'clyde <text>',
        category: 'imagenes',
        run: async (bot, message, args) => {
    
        const text = args.slice().join(' ');
		if (!text) {
			return message.channel.send(
				'<:mal:977661656937168926> Dame un texto',
			);
		}

		const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('<:mal:977661656937168926> A ocurrido algo inesperado');
		}
		const attachment = new MessageAttachment(response.message, 'clyde.png');
		return message.channel.send({files: [attachment]});
  
    }
};