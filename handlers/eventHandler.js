const fs = require('fs');

module.exports = (client) => {
  const events = fs.readdirSync("./events/").filter(f => f.split(".").pop() === "js");
  if (events.length <= 0) return console.log("No EVENTS Found".yellow.bold);

  events.forEach(f => {
    try{
    var event = require(`../events/${f}`);
    client.on(event.name, (...args) => event.execute(client, ...args));
    client.logger.log(`> ➕ • Eventos ${f} se han añadido.`, "event");

    }catch (err) {
      
            client.logger.log("Error cargando", "warn")
            client.logger.log(err, "error");
    }
  });
    client.logger.log(`> ✅ • Se cargaron exitosamente ${events.length} eventos`, "success");
};