const discord = require('discord.js');
const superagent = require('superagent')

module.exports = {

    name: "logro",
    aliases: ["achievement"],
    description: "Un nuevo logro desbloqueado ^^",
    category: "entretenimiento",
    syntax:"logro {logro}",
    cooldown: 4,
    run: async (client, message, args) => {


        try {
let text = args.join(" "); 
 if (!text) return message.channel.send({
            content: "Añade tu logro porfavor"
        });;
 if (text.length > 23) return message.channel.send({
            content: "El logro no debe ser mayor a 23 letras "
        });; 
 if (text.length < 2) return message.channel.send({
            content: "El logro debe ser mayor a 3 letras"
        });; 

let links = ["https://www.minecraftskinstealer.com/achievement/a.php?i=38", "https://www.minecraftskinstealer.com/achievement/a.php?i=1", "https://www.minecraftskinstealer.com/achievement/a.php?i=21", "https://www.minecraftskinstealer.com/achievement/a.php?i=20", "https://www.minecraftskinstealer.com/achievement/a.php?i=13", "https://www.minecraftskinstealer.com/achievement/a.php?i=18", "https://www.minecraftskinstealer.com/achievement/a.php?i=17", "https://www.minecraftskinstealer.com/achievement/a.php?i=9", "https://www.minecraftskinstealer.com/achievement/a.php?i=31", "https://www.minecraftskinstealer.com/achievement/a.php?i=22", "https://www.minecraftskinstealer.com/achievement/a.php?i=23", "https://www.minecraftskinstealer.com/achievement/a.php?i=2", "https://www.minecraftskinstealer.com/achievement/a.php?i=11", "https://www.minecraftskinstealer.com/achievement/a.php?i=19", "https://www.minecraftskinstealer.com/achievement/a.php?i=33", "https://www.minecraftskinstealer.com/achievement/a.php?i=34", "https://www.minecraftskinstealer.com/achievement/a.php?i=26", "https://www.minecraftskinstealer.com/achievement/a.php?i=35", "https://www.minecraftskinstealer.com/achievement/a.php?i=6", "https://www.minecraftskinstealer.com/achievement/a.php?i=7", "https://www.minecraftskinstealer.com/achievement/a.php?i=10", "https://www.minecraftskinstealer.com/achievement/a.php?i=39", "https://www.minecraftskinstealer.com/achievement/a.php?i=4", "https://www.minecraftskinstealer.com/achievement/a.php?i=5", "https://www.minecraftskinstealer.com/achievement/a.php?i=28"] 
 
const { body } = await superagent
.get(links[Math.floor(Math.random() * links.length)])
.query({
  h: '¡Logro desbloqueado!',
  t: text
});
  
message.channel.send({ files: [{ attachment: body, name: 'logro.png' }] 
                      
});
} catch (err) {
console.log(err)
}


        
    }
};