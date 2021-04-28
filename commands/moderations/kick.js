var Discord = require('discord.js');

const {
    Permissions: { FLAGS },
  } = require("discord.js")
module.exports = {
    name: 'kick',
    category: "moderations",
    description: "Kick users.",
    aliases: ['wyrzuc'],
    usage : "<player> <reason>",
    // botPermissions: [FLAGS.KICK_MEMBERS],
    // userPermissions: [FLAGS.KICK_MEMBERS],
    async execute(client, msg, args) {
        if(!msg.member.roles.cache.some(r => r.name === "*mod-commands-perms")) return msg.reply('Nie możesz tego użyć!')

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Nie zapingowałeś nikogo!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('Tej osoby nie ma na serwerze');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Nie możesz wyrzucić tej osoby!');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Musisz podać powód!');

    var channel = msg.guild.channels.cache.find(c => c.name === 'potato');

    var log = new Discord.MessageEmbed()
    .setTitle('Osoba wyrzucona!')
    .addField('Kto?', user, true)
    .addField('Przez:', msg.author, true)
    .addField('Powód:', reason)
    .setColor("RANDOM")
    client.channels.cache.get('773615256639373327').send(log)
    client.channels.cache.get('816997116697640960').send(log)
    msg.channel.send('Pomyślnie wyrzucono.')

    var embed = new Discord.MessageEmbed()
    .setTitle('Zostałeś wyrzucony!')
    .setDescription(reason);

    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    member.kick(reason);

  }}