const { MessageEmbed } = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    name: "clear",
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.MANAGE_MESSAGES],
    async execute(msg, client, args){
        msg.delete()
        const noembed = new MessageEmbed()
        .setDescription(`${msg.member.name}, nie możesz użyć tej komendy.`)
        .setColor('#ffff36')
        if(!msg.member.hasPermission(`KICK_MEMBERS`)) return msg.reply(noembed).then(m => (m.delete({timeout: 10000})));
        let clearamount = args[0];
        const normalembed = new MessageEmbed()
        .setDescription(`Wprowadź wartość liczbową, aby wyczyścić wiadomości.`)
        .setColor('#ffff36')
        if(isNaN(clearamount)) return msg.reply(normalembed).then(m => (m.delete({timeout: 10000})));
        if(clearamount >= 100) clearamount = 99;
        const numberembed = new MessageEmbed()
        .setDescription('Wybierz liczbę większą niż **0** i mniejszą niż **1**')
        .setColor('#9e0202')
        if(clearamount <= 0) return msg.reply(numberembed)
        const clearingembed = new MessageEmbed()
        .setDescription('⚠️ Usuwanie wiadomości.. Prosze czekać! ⚠️')
        .setColor('#ffff36')
        msg.channel.send(clearingembed).then(msg => msg.delete({timeout: 6000}));
        setTimeout(async () => {
            await msg.channel.bulkDelete(clearamount);
        }, 1000).then(function (message) {
            const embed = new MessageEmbed()
            .setTitle('📝 AutoLog')
            .addField('Usunięto wiadomości:', clearamount)
            client.channels.cache.get('816997116697640960').send(embed)
        })
    }
}