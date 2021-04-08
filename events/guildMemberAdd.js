const discord = require('discord.js')
module.exports = (client) => {
    client.on('guildMemberAdd', (member, message) => {
        client.channels.cache.get('773615256127012882').send(
            `Powitajmy <@${member.user.id}>! Zobacz <#785792284733472799>, nadaj sobie self role na <#781430498043887617> i przeczytaj wiadomość od <@204255221017214977>!`
            )
        const embed = new discord.MessageEmbed()
        .setTitle('❗ Nowa osoba na serwerze ❗')
        .setColor('RANDOM')
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .addFields(
            {
                name: "Nazwa: ",
                value: member.user.username,
                inline: true
            },
            {
                name: "#️⃣ Tag: ",
                value: `#${member.user.discriminator}`,
                inline: true
            },
            {
                name: "🆔 ID: ",
                value: member.user.id,
            },
            {
                name: "📢 Ping: ",
                value: `<@${member.user.id}>`,
                inline: true
            },
            {
                name: 'Link do awatara: ',
                value: `[Kliknij tutaj](${member.user.displayAvatarURL()})`
            },
            {
                name: 'Konto utworzono: ',
                value: member.user.createdAt.toLocaleDateString("pl-pl"),
                inline: true
            },
            {
                name: 'Dołączono na serwer: ',
                value: member.joinedAt.toLocaleDateString("pl-pl"),
                inline: true
            },
        )
        .setFooter('Wiadomość została wygenerowana automatycznie. Nie odpowiadaj na tą wiadomość')
        client.channels.cache.get('816997116697640960').send(embed)
    })
}