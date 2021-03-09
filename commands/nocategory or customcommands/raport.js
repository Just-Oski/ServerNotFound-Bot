var Discord = require('discord.js');
const chalk = require('chalk')
const {
    Permissions: { FLAGS },
  } = require("discord.js")
module.exports = {
    name: 'raport',
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.MANAGE_MESSAGES],
    async execute(client, msg, args, channel){

        let user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.member;

        msg.delete({timeout: 0000})

        if (!msg.member.permissions.has("MANAGE_MESSAGES"))
        return msg.channel.send("Nie masz permisji!");

        var currentdate = new Date(); 
        var datetime = "" + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear()
        
        var reason = args.splice(0).join(' ');
        if(!reason) return msg.reply('Musisz podać akcje!');

        var embed = new Discord.MessageEmbed()
        .setAuthor(user.user.username, user.user.avatarURL({dynamic: true}))
        .setTitle(`Raport ${datetime}`)
        .setColor('#fcba03')
        .addField('Akcja / Akcje:', reason)
        .addField('Przez:', `**<@${msg.member.id}>**`)

        client.channels.cache.get(`806072582213992458`).send(embed)
    }
}