var Discord = require('discord.js');
module.exports = {
    name: 'wzory',
    async execute(client, msg,){
        const wzorlist = new Discord.MessageEmbed()
        .setTitle('Kolory nazw graczy')
        const zielony = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription('Ten kolor mają wojskowi.')
        const niebieski = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('Ten kolor mają policjanci.')
        const czerwoni = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription('Ten kolor mają przestępcy.')
        const bialy = new Discord.MessageEmbed()
        .setColor('WHITE')
        .setDescription('Ten kolor mają zwykli gracze.')
        const wzor = new Discord.MessageEmbed()
        .setTitle('Wzór Ogłoszenia')
        .addField('Typ ogłoszenia', 'Przykłady:\nPoszukiwana, znaleziono, zgubiono, stracono, ogłoszenie społeczne')
        .addField('Jeżeli to ogłoszenie społeczne **POMIŃ TE PUNKTY**')
        .addField('Co się zgubiło/Co lub kogo się szuka/Coś się znalazło', 'Przykład:\n Znaleziono Broń Palną!')
        .addField('Kontakt', 'Przykład: \nO kontakt proszę tutaj <@441681052885581877>')
        const ogloszeniespoleczne = new Discord.MessageEmbed()
        .setTitle('Przykłady ogłoszenia społecznego')
        .addField('1.', 'Witam, poszukuje osób do nagrywek, Kontakt tutaj: <@441681052885581877>')
        .addField('2.', 'Witam, poszukuje budowniczych aby wybudować dom! Kontakt tutaj: <@441681052885581877>')
        msg.channel.send(wzor)
        msg.channel.send(ogloszeniespoleczne)
        msg.channel.send(wzorlist).then(function (msg) {
            msg.channel.send(zielony)
            msg.channel.send(niebieski)
            msg.channel.send(czerwoni)
            msg.channel.send(bialy)
        })
        
    }
}