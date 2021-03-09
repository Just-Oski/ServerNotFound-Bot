const chalk = require('chalk')
var Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "vote",
    args: true,
    async execute(client, msg, args){
        var user = msg.mentions.users.first();
        if(!user) return msg.reply('Nikogo nie zapingował*ś!\nUżycie: `?vote <ping>`\nPrzykład: `?vote <@441681052885581877>`');

        const embed = new MessageEmbed()
        .setTitle(`${msg.member.displayName} zagłosował!`)
        .setColor('#f0dc5d')
        .addField('Zagłosował na:', user)
        client.channels.cache.get(`811224411843067916`).send(embed).then(function (message) {
            msg.channel.send('Zagłosowano!')
        })
    }
}