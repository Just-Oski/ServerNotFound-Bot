var Discord = require('discord.js');
module.exports = {
    name: 'wzory',
    async execute(client, msg,){
        const wzorlist = new Discord.MessageEmbed()
        .setTitle('Wzór listu.')
        .addField('Do kogo kierujemy list', 'W tym miejscu piszemy do kogo kierujemy list. Przykład:\n**Do <@469463166766546954>**')
        .addField('Od kogo jest list', 'W tym miejscu piszemy kto napisał ten list. Przykład:\n**Od <@441681052885581877>**')
        .addField('Treść naszego listu', 'W tym miejscu piszemy treść którą chcemy przekazać danej osobie.')
        .addField('Pozdrowienia i czytelny podpis', 'Przykład: \nPozdrawiam\nJacek Nowak')
        .setDescription('Wszystkie inne wzroy są podobne!')
        msg.channel.send(wzorlist)
    }
}