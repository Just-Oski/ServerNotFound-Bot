const { MessageEmbed } = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")
module.exports = {
    name: 'unban',
    category: "moderations",
    description: "Unban users.",
    aliases: ['pardon'],
    usage : "<player>",
    botPermissions: [FLAGS.BAN_MEMBERS],
    userPermissions: [FLAGS.BAN_MEMBERS],
    async execute(client, message, args) {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Brakuje **BAN_MEMBERS**!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Podaj ID osoby którą chcesz odbanować!').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Zła osoba!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'Bez powodu, tak po prostu.';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Odbanowano ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('User ID', user.user.id, true)
                    .addField('User Tag', user.user.tag, true)
                    .addField('Powód zbanowania', user.reason != null ? user.reason : 'Bez powodu, tak po prostu.')
                    .addField('Powód odbanowania', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed)).then(() => client.channels.cache.get('773615256639373327').send(embed))
            } else {
                embed.setTitle(`${member.tag} nie jest zbanowana!`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('Error byczq.')
        });

    }
}