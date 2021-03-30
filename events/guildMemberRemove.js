module.exports = member => {
    const guild = member.guild;
    guild.channels.get(guild.channels.find('name', '💧┊żegnamy').id).send(`Użytkownik **${member.user.username}** opuścił nasz serwer :cry:, a potrzebowaliśmy Cię w naszym składzie...`);
  };