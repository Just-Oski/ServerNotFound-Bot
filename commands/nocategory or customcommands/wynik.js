var brawa = `<a:clappypepe:773861411645816843>`
var smutek = `<:pepocry1:786148711356301332>`
var Discord = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")
const chalk = require('chalk')
module.exports = {
    name: 'wyniki',
    ownerOnly: true,
    async execute(client, msg, args, channel){
        msg.delete({timeout: 0000})
        

        var currentdate = new Date(); 
        var datetime = "" + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear()
    
        var embed = new Discord.MessageEmbed()
        .setTitle(datetime)
        .setColor('#9fc5e9')
        .addField('🥇 Miejsce 1', `<@510483080985968640> z 6 głosami ${brawa}`)
        .addField('🥈 Miejsce 2', `<@727587580224340038> z 4 głosami ${brawa}`)
        .addField('🥉 Miejsce 3', `<@772716365634076675> z 3 głosami ${brawa}`)
        .setFooter('Trzecie miejsce ma Wiewiórka tylko i wyłącznie że ja się pierdolnąłem w poprzednim głosowaniu ;=;')
        client.channels.cache.get('789878356426096652').send(embed).then(function (message) {
            client.channels.cache.get('789878356426096652').send('https://media.discordapp.net/attachments/784859100587622420/784861167180840970/Pszczoa.gif')
        })

        var embed2 = new Discord.MessageEmbed()
        .setTitle(datetime)
        .setColor('#bd0000')
        .addField('🥇 Miejsce 1', `<@706476079078047846> z 5 głosami ${brawa}`)
        .addField('🥈 Miejsce 2', `<@469463166766546954> z 4 głosami ${brawa}`)
        .addField('🥉 Miejsce 3', `<@661162710871834635> z 3 głosami ${brawa}`)
        client.channels.cache.get('808412646034243694').send(embed2).then(function (message) {
            client.channels.cache.get('808412646034243694').send('https://media.discordapp.net/attachments/784859100587622420/784861167180840970/Pszczoa.gif')
        })
    
    msg.channel.send('Wysłano!')
    }

}