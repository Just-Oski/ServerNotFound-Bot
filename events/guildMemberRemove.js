module.exports = (client) => {
    const channelId = '789543225865666571' // welcome channel
  
    client.on('guildMemberAdd', (member) => {
      const message = `<@${
        member.id
      }> właśnie wyszedł z serwera.`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }