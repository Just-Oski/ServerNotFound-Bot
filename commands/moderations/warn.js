var Discord = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")
module.exports = {
    name: 'warn',
    category: "moderations",
    description: "Warns users.",
    aliases: ['ostrzezenie'],
    usage : "<player> <reason>",
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.MANAGE_MESSAGES],
    async execute(client, msg, args){
        if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('Nie możesz użyć tego!');

        var user = msg.mentions.users.first();
        if(!user) return msg.reply('Nie zapingowałeś nikogo!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('Tej osoby nie ma na serwerze');
    
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Musisz podać powód!');

    var channel = msg.guild.channels.cache.find(c => c.name === 'potato');

    var log = new Discord.MessageEmbed()
    .setTitle('Osoba upomniana')
    .addField('Kto?', user, true)
    .addField('Przez', msg.author, true)
    .addField('Powód', reason)
    client.channels.cache.get('773615256639373327').send(log)
    client.channels.cache.get('816997116697640960').send(log)
    msg.channel.send('Pomyślnie upomniano.')

    var embed = new Discord.MessageEmbed()
    .setTitle('Zostałeś upomniany!')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }
}}