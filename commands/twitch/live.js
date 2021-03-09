var Discord = require('discord.js');
const chalk = require('chalk')
const {
    Permissions: { FLAGS },
  } = require("discord.js");
module.exports = {
    name: 'live',
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.MANAGE_MESSAGES],
    args: true,
    async execute(client, msg, args, channel){
        if (!msg.member.permissions.has("MANAGE_MESSAGES"))
        return msg.channel.send("Nie masz permisji!");
        var link = args.splice(0).join(' ');
        if(!link) return msg.reply('Nie podałeś linku do twitch\'a');
        
        let user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.member;
        
        msg.delete({timeout: 0000})
        
        var embed = new Discord.MessageEmbed()
        .setAuthor(user.user.username, user.user.avatarURL({dynamic: true}))
        .setTitle('Live na twitchu zapraszam!')
        .setColor('#6441a5')
        .setDescription(`Link: ${link}`)
        client.channels.cache.get(`815187079507476500`).send(embed).then(function (msg) {
            msg.channel.send(`Link: ${link} \n@everyone ||Przepraszam <:peepocry2:786148711910473728>||`)
        })
    }
}