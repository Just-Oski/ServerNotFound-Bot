var Discord = require('discord.js');
var ms = require('ms');

const {
    Permissions: { FLAGS },
  } = require("discord.js")
module.exports = {
    name: 'mute',
    category: "moderations",
    description: "Mute users.",
    aliases: ['wycisz'],
    usage : "<player> <time> <reason>",
    // botPermissions: [FLAGS.MANAGE_MESSAGES],
    // userPermissions: [FLAGS.MANAGE_MESSAGES],
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

    var rawTime = args[1];
    var time = ms(rawTime);
    if(!time) return msg.reply('Nie podałeś czasu!');
   
    var reason = args.splice(2).join(' ');
    if(!reason) return msg.reply('Musisz podać powód!');

    var channel = msg.guild.channels.cache.find(c => c.name === 'potato');

    var log = new Discord.MessageEmbed()
    .setTitle('Osoba wyciszona')
    .addField('Kto?', user, true)
    .addField('Przez:', msg.author, true)
    .addField('Upływa za:', rawTime)
    .addField('Powód:', reason)
    .setColor("RANDOM")
    client.channels.cache.get('773615256639373327').send(log)
    client.channels.cache.get('816997116697640960').send(log)
    msg.channel.send('Pomyślnie wyciszono.')

    var embed = new Discord.MessageEmbed()
    .setTitle('Zostałeś wyciszony!')
    .addField('Upływa za:', rawTime, true)
    .addField('Powód:', reason, true);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = msg.guild.roles.cache.find(r => r.name === '💢┊Muted');

    member.roles.add(role);

    setTimeout(async() => {
        member.roles.remove(role);
    }, time);
}}