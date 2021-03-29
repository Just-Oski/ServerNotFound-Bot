var Discord = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")
module.exports = {
    name: "ban",
    category: "moderations",
    description: "Ban users.",
    aliases: ['zbanuj'],
    usage : "<player> <reason>",
    botPermissions: [FLAGS.BAN_MEMBERS],
    userPermissions: [FLAGS.BAN_MEMBERS],
    async execute(client, msg, args){
        if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('Nie możesz tego użyć');

        var user = msg.mentions.users.first();
        if(!user) return msg.reply('Nie zapingowałeś nikogo!');
    
        var member;
    
        try {
            member = await msg.guild.members.fetch(user);
        } catch(err) {
            member = null;
        }
    
        if(member){
            if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Nie możesz zbanować tej osoby!');
        }
    
        var reason = args.splice(1).join(' ');
        if(!reason) return msg.reply('Musisz podać powód.');
    
    
        var log = new Discord.MessageEmbed()
        .setTitle('Osoba zbanowana.')
        .addField('Kto?', user, true)
        .addField('Przez:', msg.author, true)
        .addField('Powód:', reason)
        .setColor("RANDOM")
        client.channels.cache.get('773615256639373327').send(log)
        client.channels.cache.get('816997116697640960').send(log)
        msg.channel.send('Pomyślnie zbanowano.')
    
        var embed = new Discord.MessageEmbed()
        .setTitle('Zostałeś ZBANOWANY')
        .setDescription(reason);
    
        try {
            await user.send(embed);
        } catch(err) {
            console.warn(err);
        }
    
        msg.guild.members.ban(user); // This should not be user.id like I said in my video. I made a mistake. Sorry! :)
    
    }
}