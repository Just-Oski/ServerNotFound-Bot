const {
    MessageEmbed
} = require('discord.js');

const {
    promptMessage
} = require('../../functions');


module.exports = {
    name: "poll",
    category: "Fun",
    description: "Create a poll",
    aliases: [],
    usage : "<question>",
    async execute(client, message , args) {
        message.delete({timeout: 0000});
        
        if(args.length === 0) 
        return message.reply('Zadaj jakieś pytanie!').then(m => m.delete({
            timeout: 5000
        }));



        const promptEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setAuthor(`Pytanie`)
        .setDescription(`${args.join(" ")}`)
        .setFooter(`Zadane przez ${message.member.displayName}`)


        message.channel.send(promptEmbed).then(async msg =>{
           promptMessage(msg, message.author, 30,  ["✅", "❌"])
        })



    }
}