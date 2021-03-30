module.exports = (client) => {
    const channelId = '773615256127012882' // welcome channel
  
    client.on('guildMemberAdd', (member) => {
      const message = `<@${
        member.id
      }> właśnie zjawił się na naszym serwerze!!`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }