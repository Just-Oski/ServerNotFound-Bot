var Discord = require('discord.js');
const chalk = require('chalk')
module.exports = {
    name: 'taknie',
    ownerOnly: true,
    async execute(client, msg, args, channel){
        msg.delete({timeout: 0000})
        var embed = new Discord.MessageEmbed()
        .setTitle('<:plus_one:779411091637141554> czy <:minus_one:779411091561119796>?')
        .setColor('#db2c2c')
        .addField('<a:4745_thisr:795386822750502952>+1<a:1LeftArrow:795386822482067497>', 'Kliknij <:plus_one:779411091637141554> aby zagłosować', true)
        .addField('<a:4745_thisr:795386822750502952>-1<a:1LeftArrow:795386822482067497>', 'Kliknij <:minus_one:779411091561119796> aby zagłosować.', true)
        msg.channel.send(embed).then(function (message) {
            message.react('<:plus_one:779411091637141554>')
            message.react('<:minus_one:779411091561119796>')
            })
    }}