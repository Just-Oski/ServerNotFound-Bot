var Discord = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")
const chalk = require('chalk')
module.exports = {
    name: 'glosowanie',
    // botPermissions: [FLAGS.BAN_MEMBER],
    // userPermissions: [FLAGS.BAN_MEMBER],
    async execute(client, msg, args, channel){

        msg.delete({timeout: 0000})

        if(!msg.member.roles.cache.some(r => r.name === "*glosowanie-commands-perms")) return msg.reply('Nie możesz tego użyć!')

        var currentdate = new Date(); 
        var datetime = "" + currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear()
        var datetime2 = "" + (currentdate.getDate()+5) + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear()
    var embed = new Discord.MessageEmbed()
    .setTitle(datetime)
    .setDescription('📆 Głosowanie na supporta. // Opiekunowie: <@469463166766546954> i<@706476079078047846>')
    .setColor('#9fc5e9')
    .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }), 'https://discord.gg/UDfGNgrPFb')
    .setFooter('Wiadomość została wygenerowana automatycznie.', msg.guild.iconURL({ dynamic: true }))
    .addField('Możesz wybrać jednego kandydata!', 'Naciśnij odpowiednią emotkę, aby zagłosować.')
    .addField('Koniec głosowania: ', '<a:4745_thisr:795386822750502952>' + datetime2 + '<a:1LeftArrow:795386822482067497> \nWyniki zostaną podane na kanale <#789878356426096652>.')
    .addField('<a:4745_thisr:795386822750502952>Aktualny support:<a:1LeftArrow:795386822482067497>', '1️⃣ <@510483080985968640>\n2️⃣ <@772716365634076675>\n🐠 <@727587580224340038>\n3️⃣ <@770554000041967627>\n4⃣ <@824520913886248962>')
    .addField('\u200b', `\u200b`)
    .addField('<a:4745_thisr:795386822750502952>Babzuk<a:1LeftArrow:795386822482067497>', 'Kliknij 1️⃣ aby zagłosować.', true)
    .addField('<a:4745_thisr:795386822750502952>Wiewiór<a:1LeftArrow:795386822482067497>', 'Kliknij 2️⃣ aby zagłosować.', true)
    .addField('<a:4745_thisr:795386822750502952>Dorsz<a:1LeftArrow:795386822482067497>', 'Kliknij 🐠 aby zagłosować.', true)
    .addField('<a:4745_thisr:795386822750502952>Xenon<a:1LeftArrow:795386822482067497>', 'Kliknij 3️⃣ aby zagłosować.', true)
    .addField('<a:4745_thisr:795386822750502952>Izuku<a:1LeftArrow:795386822482067497>', 'Kliknij 4⃣ aby zagłosować.', true)
    msg.channel.send(embed)
    .then(function (message) {
    message.react('1️⃣')
    message.react('2️⃣')
    message.react('🐠')
    message.react('3️⃣')
    message.react('4⃣')
    }).then(function (message) {
        msg.channel.send('https://media.discordapp.net/attachments/784859100587622420/784861167180840970/Pszczoa.gif')
    }).then(function (message) {
    var embed2 = new Discord.MessageEmbed()
    .setTitle(datetime)
    .setDescription('📆 Głosowanie na moderatora. // Opiekunowie: <@469463166766546954> i<@706476079078047846>')
    .setColor('#bd0000')
    .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }), 'https://discord.gg/UDfGNgrPFb')
    .setFooter('Wiadomość została wygenerowana automatycznie.', msg.guild.iconURL({ dynamic: true }))
    .addField('Możesz wybrać jednego kandydata!', 'Naciśnij odpowiednią emotkę, aby zagłosować.')
    .addField('Koniec głosowania: ', '<a:4745_thisr:795386822750502952>' + datetime2 + '<a:1LeftArrow:795386822482067497> \nWyniki zostaną podane na kanale <#808412646034243694>.')
    .addField('<a:4745_thisr:795386822750502952>Aktualna moderacja:<a:1LeftArrow:795386822482067497>', '1️⃣ <@661162710871834635>\n 3️⃣ <@469463166766546954>\n 4⃣ <@706476079078047846>')
    .addField('\u200b', `\u200b`)
    .addField('<a:4745_thisr:795386822750502952>Brutus<a:1LeftArrow:795386822482067497>', 'Kliknij 1️⃣ aby zagłosować', true)
    .addField('<a:4745_thisr:795386822750502952>Szoszoneq<a:1LeftArrow:795386822482067497>', 'Kliknij 3️⃣ aby zagłosować.', true)
    .addField('<a:4745_thisr:795386822750502952>Kacpi<a:1LeftArrow:795386822482067497>', 'Kliknij 4⃣ aby zagłosować.', true)
    msg.channel.send(embed2)
    .then(function (message) {
    message.react('1️⃣')
    message.react('3️⃣')
    message.react('4⃣')
    }).then(function (message) {
        msg.channel.send('https://media.discordapp.net/attachments/784859100587622420/784861167180840970/Pszczoa.gif')
    }).then(function (message) {
        msg.channel.send('<@&782935641247055912>, <@&788688928697614367>')
    })
    })
}}