const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const db = require("quick.db");
// let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports = {
    name: 'warns',
    category: "moderations",
    description: "Warns.",
    aliases: [''],
    usage : "<player>",
    // botPermissions: [FLAGS.MANAGE_MESSAGES],
    // userPermissions: [FLAGS.MANAGE_MESSAGES], 
    async execute(client, message, args) {
        let user;
        if(!args[0]) user = message.author
        if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
        if(args[0] && !isNaN(args[0])){
            user = client.users.cache.get(args[0])
     
            if(!message.guild.members.cache.has(args[0])) return message.reply("Nie znaleziono.")
     
        }
        if(!user) return message.reply("Zapinguj jakąś osobe!")
    
        const number = db.fetch(`number.${user.id}.${message.guild.id}`)
        const warnInfo = db.fetch(`info.${user.id}.${message.guild.id}`)
    
    if(!number || !warnInfo || warnInfo == []) return message.reply("Nie ma warna.")
    const warnembed = new Discord.MessageEmbed()
    
    for(let warnings of warnInfo){
        let mod = warnings.moderator
        let reason = warnings.reason
        let date = warnings.date
    
    warnembed.addField(`Warny ${user.tag}`,`**Moderator:** ${mod}\n**Powód:** ${reason} \n**Data:** ${date}\n**Warn ID:** \`${warnings.id}\``,true)
    }
    warnembed.setColor(message.guild.members.cache.get(user.id).roles.highest.color)
    
    message.channel.send(warnembed)
    }
}
