const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const {
    Permissions: { FLAGS },
  } = require("discord.js")

module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "Fun",
  aliases: [],
  botPermissions: [FLAGS.MANAGE_MESSAGES],
  userPermissions: [FLAGS.MANAGE_MESSAGES],
  async execute(bot, message, args) {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send("Nie masz permisji!");  
    if (!args[0]) return message.channel.send(`Nie podałeś konkretnego czasu`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Użyłeś złego formatowania daty!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`To nie numer!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Nie moge znaleść takiego kanału!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Bez nagrody? No co ty!`);
    message.channel.send(`*Giveway zrobiony na kanale ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Giveaway!`)
      .setDescription(
        `${message.author} robi giveaway o **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reakcji: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Za mało osób wzięło udział!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Wygranym w giveaway'u o **${prize}** jest... ${winner}`
      );
    }, ms(args[0]));
  },
};