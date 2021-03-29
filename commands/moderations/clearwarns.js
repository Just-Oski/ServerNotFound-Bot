
const Discord = require("discord.js")
const db = require("quick.db")
const moment = require("moment")
let random_string = require("randomstring")

const {
    Permissions: { FLAGS },
  } = require("discord.js")

module.exports = {
    name: 'clearwarns',
    category: "moderations",
    description: "Warns users.",
    aliases: ['cw'],
    usage : "idk",
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
    let id = args.slice(1).join(" ")
    if (!id) {
        db.delete(`info.${member.id}.${msg.guild.id}`)
        msg.channel.send(":white_check_mark: Warns deleted.")
    } else {
        let database = db.fetch(`info.${member.id}.${msg.guild.id}`)
        if (!database || database == []) return msg.channel.send(":x: Ta osoba nie posiada warnów!")

        if (!database.find(data => data.id === id)) return msg.channel.send(":x: Nie znaleziono!")




        database.splice(database.findIndex(data => data.id == id), 1)
if(database.length >= 1){
        db.set(`info.${member.id}.${msg.guild.id}`, database)
}else {
    db.delete(`info.${member.id}.${msg.guild.id}`)
}
msg.channel.send(":white_check_mark: usunięto warna.")
        }
    }

}