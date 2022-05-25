const { fs, readdirSync } = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = (client) => {





    const commands = [];

    readdirSync("./slsCmds/").forEach((dir) => {
        const slashCommandFile = readdirSync(`./slsCmds/${dir}/`).filter((files) => files.endsWith(".js"));

        for (const file of slashCommandFile) {
            const slashCommand = require(`../slsCmds/${dir}/${file}`);

            commands.push(slashCommand.data.toJSON());
            client.slsCommands.set(slashCommand.data.name, slashCommand);
        }
    });




    client.once('ready', () => {

        const rest = new REST({
            version: '9'
        }).setToken(process.env.TOKEN);
        (async () => {

            try {
                if (client.config.slashGlobal || !client.config.testGuildID) {
                    await rest.put(
                        Routes.applicationCommands(client.user.id), {
                            body: commands
                        },
                    );
                    client.logger.log(`> ➕ • Se han cargado los comandos de generales`, "cmd")
                } else {
                    await rest.put(
                        Routes.applicationGuildCommands(client.user.id, client.config.testGuildID), {
                            body: commands
                        },
                    );
                    client.logger.log(`> ➕ • Se han cargado los comandos de desarrollo.`, "cmd")
                }
            } catch (e) { console.error(e); }

        })();
    });

};