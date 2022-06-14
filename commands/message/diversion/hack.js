const { Client, Message, MessageEmbed, discord } = require("discord.js")
const ms = require("ms");

module.exports = {
    name: "hack",
    description: "Hackea a alguien",
    category: "diversion",
    aliases: ["hack"],
    syntax: "hack <mencion>",
    cooldown: 8,
    permissions: ["SEND_MESSAGES"],
    run: async (client, message, args , config ) => {


        if (!args[0]) {
            return message.channel.send(
                config.mal + "¿ whoa... A quien queremos hackear ?"
            );
        }
        const tohack = message.mentions.members.first();
        let msg = await message.channel.send(`Hackeando a ${tohack.displayName}....`);

        let time = "1s";
        setTimeout(function() {
            msg.edit(`Desencriptando el email y contraseña de ${tohack.displayName}.....`);
        }, ms(time));

        let time1 = "6s";
        setTimeout(function() {
            msg.edit(`E-Mail: ${tohack.displayName}@gmail.com \nContraseña: ********`);
        }, ms(time1));

        let time2 = "9s";
        setTimeout(function() {
            msg.edit("Buscando otras cuentas.....");
        }, ms(time2));

        let time3 = "15s";
        setTimeout(function() {
            msg.edit("Buscando cuenta de Epic Games.....");
        }, ms(time3));

        let time4 = "21s";
        setTimeout(function() {
            msg.edit("Crackeando cuenta de Epic Games......");
        }, ms(time4));

        let time5 = "28s";
        setTimeout(function() {
            msg.edit("Cuenta de epic games hackeada");
        }, ms(time5));

        let time6 = "31s";
        setTimeout(function() {
            msg.edit("Registrando info.....");
        }, ms(time6));

        let time7 = "38s";
        setTimeout(function() {
            msg.edit("Vendiendo informacion a una mafia pakistanesa....");
        }, ms(time7));

        let time8 = "41s";
        setTimeout(function() {
            msg.edit(`Ya hackeamos a  ${tohack.displayName}`);
            message.channel.send(`\`\`\`92.28.211.234 N: 4.818851 Y: -75.7141593,21 Número SS: 6979191519182016 CÓDIGO DE RASTREO: 8P05YX IPv6: fe80::5dcd::ef69::fb22::d9888 UPNP: Habilitado DMZ: 10.112.42.15 MAC: 5A:75:3E:7E:00 ISP: Ucom Unversal DNS: 8.8.8.8 ALT DNS: 1.1.1.8.1 DNS: SUFFIX: Dlink WAN: 100.23.10.15 TIPO WAN: Soldado Nat GATEWAY: 192.168.0.1 MASCARILLA SUBNET: 255.255.0.255 UDP PUERTOS ABIERTOS: 8080 80 TCP PUERTOS ABIERTOS: 443 RUTA DEL VENDEDOR: ERICCSON VENDEDOR DE DISPOSITIVOS: WIN31-X TIPO DE CONEXIÓN: Ethernet ICMP HOPS:{ 192.168.01 192.168.1.1 100.73.43.4 host-132.12.32.167.ucom.com host-66.120.12.111.ucom.com 36.134.67.189 216.239.78.111 sof02s32-in-f14.1e100.net TOTAL HOPS: 8

DISPOSITIVOS ACTIVOS:{

[HTTP] 192.168.3.1:80 => 92.28.211.234:80 [HTTP] 192.168.3.1:443 => 92.28.211.234:443 [UDP] 192.168.0.1:788 => 192.168.1.1:6657 [TCP] 192.168.1.1:67891 => 92.28.211.234:345

[TCP] 192.168.54.43.7777\`\`\``)
        }, ms(time8));

    }
}