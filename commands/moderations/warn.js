var Discord = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")

  const db = require("quick.db")
  const moment = require("moment")
  let random_string = require("randomstring")
//   let warns = fs.readFileSync("./warns.json", "utf8")

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

    // if(!warns[user.id]) warns[user.id] = {
    //     warns: 0
    //   };

    //   warns[wUser.id].warns++;

    //   fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
    //     if (err) console.log(err)
    //   });

    let res = args.slice(1).join(" ")

    let warnID = await  
    random_string.generate({
      charset: 'numeric',
      length:8
    });

    var log = new Discord.MessageEmbed()
    .setTitle('Osoba upomniana')
    .addField('Kto?', user, true)
    .addField('Przez', msg.author, true)
    // .addField('Liczba warnów', warns[user.id].warns, true)
    .addField('Powód', reason)
    .addField('ID Warna', warnID)
    .setColor("RANDOM")
    client.channels.cache.get('773615256639373327').send(log)
    client.channels.cache.get('816997116697640960').send(log)
    msg.channel.send('Pomyślnie upomniano.')

    var embed = new Discord.MessageEmbed()
    .setTitle('Zostałeś upomniany!')
    .setDescription(reason)
    .setTitle('ID Warna', warnID);

    console.log(`${user.id} warned ID: ${warnID}`)
 
    db.push(`info.${user.id}.${message.guild.id}`,{moderator:message.author.tag , reason:res ? res : "N/A" , date:moment().format("YYYY-MM-DD"),id:warnID})
    db.add(`number.${user.id}.${message.guild.id}`,1)

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }
}}