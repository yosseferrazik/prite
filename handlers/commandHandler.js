const fs = require('fs');

module.exports = (client) => {
  const files = fs.readdirSync("./commands").forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let cmd = require(`../commands/${dir}/${file}`);
            if(cmd.name){
                client.commands.set(cmd.name, cmd);
                client.logger.log(`> ➕ • Comando ${cmd.name} de ${cmd.category} Esta cargado.`, "cmd")
            }else {
                client.logger.log(`${file} - ❌  -> Necesito el nombre del help, o el nombre no es valido`, "warn");
                continue;
            }
        }
  })
    client.logger.log(`> ✅ • Se cargaron exitosamente ${client.commands.size} comandos`, "success");
};