const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "github",
    description: "Proporciona informacion sobre un usuario de github",
    category: "utilidad",
    aliases: ["git"],
    syntax: "github <usuario>",
    run: async (client, message, args) => {








        const name = args.join(' ');
        if (!name) {
            return message.channel.send(
                `<:mal:977661656937168926> Porfavor proporciona un nombre `,
            );
        }

        const url = `https://api.github.com/users/${name}`;

        let response;
        try {
            response = await fetch(url).then(res => res.json());
        }
        catch (e) {
            return message.channel.send(
                `<:mal:977661656937168926> Uh , creo que no encontre tu usuario`,
            );
        }

        try {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`${response.login} (${response.id})`)
                .setDescription(response.bio ? response.bio : 'None')
                .addFields(
                    { name: 'Seguidores', value: `\`\`\`${response.followers.toLocaleString()}\`\`\``, inline: true },
                    { name: 'Siguiendo', value: `\`\`\`${response.following.toLocaleString()}\`\`\``, inline: true },
                    { name: 'Repositorios', value: `\`\`\`${response.public_repos.toLocaleString()}\`\`\``, inline: true },
                    { name: 'Email', value: `\`\`\`${response.email ? response.email : 'None'}\`\`\`` },
                    { name: 'Compañía', value: `\`\`\`${response.company ? response.company : 'None'}\`\`\`` },
                    { name: 'Ubicacion', value: `\`\`\`${response.location ? response.location : 'None'}\`\`\`` },
                )
                .setURL(response.html_url)
                .setThumbnail(response.avatar_url)
                .setTimestamp();

            message.channel.send({ embeds: [embed] })
        }
        catch (err) {
            return message.channel.send(
                `No se encontro el usuario`,
            );
        }








    }
}