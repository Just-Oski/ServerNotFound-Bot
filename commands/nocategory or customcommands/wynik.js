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
        .addField('🥇 Miejsce 1', `<@706476079078047846> z 3 głosami ${brawa}`)
        .addField('🥈 Miejsce 2', `<@661162710871834635>, <@510483080985968640> z 1 głosem ${brawa}`)
        .addField('🥉 Miejsce 3', `<@718349577295757333> z 0 głosami ${smutek}`)
        client.channels.cache.get('789878356426096652').send(embed).then(function (message) {
            client.channels.cache.get('789878356426096652').send('https://media.discordapp.net/attachments/784859100587622420/784861167180840970/Pszczoa.gif')
        })

        var embed2 = new Discord.MessageEmbed()
        .setTitle(datetime)
        .setColor('#bd0000')
        .addField('🥇 Miejsce 1', `<@505736913676664832> z 3 głosami ${brawa}`)
        .addField('🥈 Miejsce 2', `<@441681052885581877> z 2 głosami ${brawa}`)
        .addField('🥉 Miejsce 3', `<@772716365634076675> z 0 głosami ${smutek}`)
        client.channels.cache.get('808412646034243694').send(embed2).then(function (message) {
            client.channels.cache.get('808412646034243694').send('https://media.discordapp.net/attachments/784859100587622420/784861167180840970/Pszczoa.gif')
        })
    
    msg.channel.send('Wysłano!')
    }

}