module.exports = (client) => {
    const channelId = '773615256127012882' // welcome channel
    const rulesChannelId = '785792284733472799' // rules and info
    const infoChannelId = '803591701780234280'
  
    client.on('guildMemberAdd', (member) => {
      const message = `Witaj <@${member.id}> na serwerze! Sprawdź ${member.guild.channels.cache.get(rulesChannelId).toString()} oraz ${member.guild.channels.cache.get(infoChannelId).toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }