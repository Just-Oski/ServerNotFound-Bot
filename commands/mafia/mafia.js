const chalk = require('chalk')
var Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "mafia",
    ownerOnly: true,
    async execute(client, msg, args, channel){
        
        msg.delete({timeout: 0000})
        const one = new MessageEmbed()
        .setTitle('Gra się rozpoczęła.')
        .setDescription('Rozpoczynamy turniej w mafię. Wszystkie zasady tutaj: <tutaj będzie link do google docs`a>')
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        const twot = new MessageEmbed()
        .setTitle('Drodzy Wieśniacy!')
        .setColor('#34eb52')
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setDescription('Waszym zadaniem jest znalezienie wszystkich wilkołaków.')
        client.channels.cache.get(`811224411843067916`).send(one).then(function (message){
            client.channels.cache.get(`806426429582737428`).send(twot)
            client.channels.cache.get(`806426429582737428`).send('<@&807280457669410869>')
        })
        const two = new MessageEmbed()
        .setTitle('Drogie wilkołaki!')
        .setColor('#bd0000')
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setDescription('Waszym zadaniem jest wymordowaniem każdą osobę, aby wygrać grę. Jeżeli jeden z was odpadnie, nie może podpowiadać drugiemu.')
        const three = new MessageEmbed()
        .setTitle('Drogi Policjancie!')
        .setColor('#34ebc3')
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setDescription('Twoim zadaniem jest wyeliminować każdego wilkołaka. Każdego głosowania, masz dwa głosy albo twój głos jest decydujący.')
        const four = new MessageEmbed()
        .setTitle('Drogi Medyku!')
        .setColor('#e1f7f2')
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setDescription('Twoim zadaniem jest przetrwać z miastem. Każdej nocy możesz uratować jedną osobę.')
        const five = new MessageEmbed()
        .setTitle('Droga Wiedźmo!')
        .setColor('#5c2721')
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
        .setDescription('Twoim zadaniem jest przetrwać z miastem. Jednej nocy możesz uratować, albo zabić osobę które wilkołaki wybrały.')
        client.channels.cache.get(`807283664400416769`).send(three).then(function (message){
            client.channels.cache.get(`807283664400416769`).send('<@&807280449268219945>')
        })
        client.channels.cache.get(`807283561924526101`).send(two).then(function (message) {
            client.channels.cache.get(`807283561924526101`).send('<@&807280453542477914>')
        })
        client.channels.cache.get(`807283744989249556`).send(four).then(function (message) {
            client.channels.cache.get(`807283744989249556`).send('<@&807280490465591376>')
        })
        client.channels.cache.get(`807283903105597491`).send(five).then(function (message) {
            client.channels.cache.get(`807283903105597491`).send('<@&807280503513808917>')
        })  
        
    }
}