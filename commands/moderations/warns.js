const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("../../warns/warnings.json", "utf8"));

module.exports = {
    name: 'warn',
    category: "moderations",
    description: "Warns users.",
    aliases: ['ostrzezenie'],
    usage : "<player> <reason>",
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.MANAGE_MESSAGES], 
    async (client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send({embed: {
            color: 16734039,
            description: "Nie możesz tego użyć!"
        }})

let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send({embed: {
            color: 16734039,
            description: "Nie moge znaleść użytkownika"
        }})
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  let warnlevel = warns[wUser.id].warns
  
  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warny")
  .setColor("RANDOM")
  .addField("Liczba " + `<@${wUser.id}>` + " ostrzeżeń:", `${warnlevel}`)
  .setTimestamp()
  message.channel.send(warnEmbed);
}}

