const { Client, Message, MessageEmbed, discord } = require("discord.js")

module.exports = {
    name: "roast",
    description: "¿ Que me dijiste ?",
    category: "diversion",
    aliases: ["insulto"],
    syntax: "roast <usuario>",
    cooldown:5,
    permissions:["SEND_MESSAGES"],
    run: async (client, message, args , config) => {


        
    let target = message.mentions.members.first() || args.join(" ");
        if(target.id === '898444313049042974') {
            return message.channel.send("No quiero insultar a mi creador :(")
        }
    if (args.length == 0) {
      return message.channel
        .send(config.mal + " Menciona a alguien")

    }
    var roasts = [
      "*lo mete en el horno*",
      "Eres tan tonto",
      "Lo siento, no puedo oírte por lo molesto que eres",
      "Tengo mejores cosas que hacer",
      "Eres tan tonto como Cleverbot",
      "Tu coeficiente intelectual es más bajo que el de la Fosa de las Marianas",
      "Eres tan molesto que incluso las moscas se mantienen alejadas de tu hedor",
      "Vete por favor",
      "Te daría una mirada desagradable, pero ya tienes una",
      "Parece que tu cara se incendió y alguien trató de apagarlo con un martillo",
      "Tu árbol genealógico debe ser un cactus porque todos en él son unos pinchazos",
      "Algún día llegarás lejos, y espero que te quedes allí",
      "El zoológico llamó Se preguntan cómo saliste de tu jaula",
      "Esperaba una batalla de ingenio, pero pareces estar desarmado",
      "Eres una prueba de que la evolución puede ir en reversa",
      "Los cerebros no lo son todo, en tu caso, no son nada",
      "Lo siento, no entendí eso, no hablo idiota",
      "¿Por qué es aceptable que seas un idiota, pero no que yo lo señale?",
      "Todos salimos de los simios, pero tú no llegaste lo suficientemente lejos",
      "Incluso los monos pueden ir al espacio, así que claramente te falta algo de potencial",
      "Es más cerebro que fuerza, pero tú no tienes ninguno",
      "Pareces un mono, y también hueles a uno",
      "Hasta entre los idiotas te falta",
      "Fracasas incluso cuando no estás haciendo absolutamente nada",
      "Si hubiera un voto para 'menos probabilidades de éxito', ganarías el primer premio",
      "Estoy rodeado de idiotas O, espera, solo eres tú",
      "Quiero irme a casa Bueno, en realidad solo quiero alejarme del horrible aroma que tienes",
      "Cada vez que me tocas, tengo que ir a casa y lavar toda mi ropa nueve veces para recuperar el olor normal",
      "Si tuviera un dólar por cada cerebro que no tienes, tendría un dólar",
      "Te ayudaría a tener éxito pero eres incapaz",
      "La línea de tu cabello está construida como un gráfico, las fuerzas positivas y negativas se atraen, pero la maquinilla y tu cabello se repelen",
      "¡Sé un buen chiste! ¡Tú!",
      "Tienes dos partes de tu cerebro, 'izquierda' y 'derecha' En el lado izquierdo, no hay nada correcto En el lado derecho, no queda nada",
      "¿Tu trasero está celoso de la cantidad de mierda que acaba de salir de tu boca?",
      "No participo en combate mental con los desarmados",
      "Dos errores no hacen un acierto, toma a tus padres como ejemplo",
      "Tu certificado de nacimiento es una carta de disculpa de la fábrica de condones",
      "Suenas razonable ¡Debe ser hora de aumentar mi medicación!",
      "Debes haber nacido en una carretera porque ahí es donde ocurren la mayoría de los accidentes",
      "Eres tan feo, cuando tu mamá te dejó en la escuela, recibió una multa por tirar basura",
      "Si la risa es la mejor medicina, tu cara debe estar curando el mundo",
      "Me gustaría ver las cosas desde tu punto de vista, pero parece que no puedo meter la cabeza tan adentro de mi trasero",
      "La única manera de tener sexo es trepar por el culo de una gallina y esperar",
      "¡Estoy celoso de todas las personas que no te han conocido!",
      "Si tuviera una cara como la tuya, demandaría a mis padres",
      "Solo hay un problema con tu cara Puedo verlo",
      "¿No amas la naturaleza, a pesar de lo que te hizo?",
      "¿Qué idioma estás hablando? Porque suena como una mierda",
      "La estupidez no es un crimen, así que eres libre de irte",
      "Entonces, ¿un pensamiento cruzó tu mente? Debe haber sido un viaje largo y solitario",
      "Tienes un coeficiente intelectual a temperatura ambiente, si la habitación está en la Antártida",
      "Si realmente quieres saber acerca de los errores, deberías preguntarles a tus padres",
      "Te preguntaría cuántos años tienes, pero sé que no puedes contar tanto",
      "¿Quieres saber cómo recibo todos estos insultos? Utilizo algo llamado inteligencia",
      "Iba a darte una mirada desagradable, pero ya tienes una",
      "No sé cuál es tu problema, pero apuesto a que es difícil de pronunciar",
      "Los cerebros no lo son todo En tu caso no son nada",
      "Como forastero, ¿qué piensas de la raza humana?",
      "Te ves como una foto de antes",
      "Oh, ¿qué? Lo siento Estaba tratando de imaginarte con una personalidad",
      "Tú eres la razón por la que el acervo genético necesita un salvavidas",
      "Siempre podemos saber cuándo estás mintiendo Tus labios se mueven",
      "Puede que me encante ir de compras, pero no compraré tus tonterías",
      "El infierno está empapelado con todas tus selfies eliminadas",
      "Eres la prueba viviente de que el estiércol puede sacar patas y caminar",
      "¿Te das cuenta de que el maquillaje no va a arreglar tu estupidez?",
      "Llamarte idiota sería un insulto para toda la gente estúpida",
      "Tienes la cara perfecta para la radio",
      "Aww, es tan lindo cuando tratas de hablar sobre cosas que no entiendes",
      "Si quisiera saber de un gilipollas, me tiraría un pedo",
      "¿Cuál es la diferencia entre tú y un huevo? ¡Los huevos se ponen!",
      "Pareces una roca aplastada contra un montón de arena, rodada en"];
        
    await message.channel.send(
      `${target}, ${roasts[Math.floor(Math.random() * roasts.length)]}`
    );

    }
}