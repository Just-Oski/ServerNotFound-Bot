module.exports = member => {
    const guild = member.guild;
    guild.channels.get(guild.channels.find('name', '👋┊witamy').id).send(`Użytkownik **${member.user.username}** dołączył do serwera! Potrzebowaliśmy Cię w naszym składzie!`);
  };