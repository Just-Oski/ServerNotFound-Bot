const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "urlop",
    args: true,
    async execute(msg, channel, client, args){
        let user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.member;
        msg.delete({timeout: 0000})
        if (!msg.member.permissions.has("MANAGE_MESSAGES"))
        return msg.channel.send("Nie masz permisji!");

        var data = args.splice(0).join(' ');
        if(!data) return msg.reply('Musisz podać date od kiedy do kiedy masz urlop na twitchu!\n Przykład: `?urlop 23-24.03.2021`');

        const embed = new MessageEmbed()
        .setTitle('🕒 Urlop!')
        .setColor('#6441a5')
        .addField('Kto:', user)
        .addField('W zakresie:', data)
        .addField('\u200b', '\u200b')
        .addField('Harmonogram Liveów na twitchu', '[Tutaj]()')
        
        client.channels.cache.get('816566501779832882').send(embed)
    }
}