var Discord = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")

  const fs = require("fs");
  const ms = require("ms");
  let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports = {
    name: 'warn',
    category: "moderations",
    description: "Warns users.",
    aliases: ['ostrzezenie'],
    usage : "<player> <reason>",
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.MANAGE_MESSAGES],
    async execute(client, msg, args){
        if(!msg.member.hasPermission('MANAGE_MESSAGE')) return msg.reply('Nie możesz użyć tego!');

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

    if(!warns[user.id]) warns[user.id] = {
        warns: 0
      };

      warns[wUser.id].warns++;

      fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
      });

    var log = new Discord.MessageEmbed()
    .setTitle('Osoba upomniana')
    .addField('Kto?', user, true)
    .addField('Przez', msg.author, true)
    .addField('Liczba warnów', warns[user.id].warns, true)
    .addField('Powód', reason)
    .setColor("RANDOM")
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