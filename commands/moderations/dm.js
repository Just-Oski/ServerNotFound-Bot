
const {
  Permissions: { FLAGS },
} = require("discord.js")

module.exports = {
    name: "dm",
    description: "DM a user in the guild",
    category: "moderations",
    aliases: [],
    usage: '<user> <message>',
    // botPermissions: [FLAGS.MANAGE_MESSAGES],
    // userPermissions: [FLAGS.MANAGE_MESSAGES],
    async execute(bot, message, args) {
      message.delete({function: 0000});
      if(!msg.member.roles.cache.some(r => r.name === "*mod-commands-perms")) return msg.reply('Nie możesz tego użyć!')
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `Nie zapingowałeś osoby, lub podałeś złe ID użytkownika!`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("Nie podałeś żadnej wiadomości!");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("Nie mogę tej osobie wysłać wiadomości!"))
        .then(() => message.channel.send(`Wysłano wiadomość do ${user.user.tag}`));
    },
  };