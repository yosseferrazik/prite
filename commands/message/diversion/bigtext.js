const discord = require('discord.js');

module.exports = {

    name: "bigtext",
    aliases: ["bt"],
    description: "Covierte lo que quieras en textos grandes",
    category: "diversion",
    cooldown: 5,
    run: async (client, message, args) => {




        let text = args.join(" ");

        if (text.length > 15) return message.channel.send({
            content: "<:mal:977661656937168926> No mas de 15 letras"
        });

        if (!args.length) return message.channel.send({
            content: "<:mal:977661656937168926> Añade tu texto porfavor"
        });

        message.channel.send(BigText(args.join(' ')));

        function BigText(args) {
            const array = [];

            for (let letra of Array.from(args)) {
                if (/\d/g.test(letra)) {

                    switch (letra) {
                        case '0':
                            // 
                            array.push(':zero:');
                            break;
                        case '1':
                            // 
                            array.push(':one:');
                            break;
                        case '2':
                            // 
                            array.push(':two:');
                            break;
                        case '3':
                            // ...
                            array.push(':three:');
                            break;
                        case '4':
                            // ...
                            array.push(':four:')
                            break;
                        case '5':
                            // ...
                            array.push(':five:');
                            break;
                        case '6':
                            // ...
                            array.push(':six:');
                            break;
                        case '7':
                            // ...
                            array.push(':seven:');
                            break;
                        case '8':
                            // ...
                            array.push(':eight:');
                            break;
                        case '9':
                            // ...
                            array.push(':nine:');
                            break;
                    }
                } else if (/[^a-z]/gi.test(letra)) {

                    array.push(letra);

                } else {


                    array.push(`:regional_indicator_${letra.toLowerCase()}:`);

                }
            }
            return array.join(' ');
        }





    }
};