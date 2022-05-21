const Discord = require('discord.js');

module.exports = {

    name: "8ball",
    aliases: [],
    description: "Te da una respuesta a cualquier pregunta",
    category: "entretenimiento",
    cooldown: 4,
    run: async (client, message, args) => {

        let list = [
            'Si', 'N0', 'Puede ser', 'Lo dudo', 'Arriba españa', 'XD ok no', 'No lo creo', 'La respuesta es evidente ', 'La respuesta esta en tu corazon', 'hmmmmmmm... lo siento pero no , chupala  ', 'jaj te gusta el pene '];



        var rand = list[Math.floor(Math.random() * list.length)];
        let pregunta = (args[0]);
        if (!pregunta) {
            return message.channel.send({
                content: "¿ Y la pregunta ?"
            });
        }

        const embed = new Discord.MessageEmbed()
            .setTitle('8Ball dice...')
            .setDescription(`${rand}`)
            .setFooter('8Ball')
            .setColor('RANDOM')
            .setFooter("Me pican los cocos")

        await message.channel.send({

            embeds: [embed]

        });



    }
};