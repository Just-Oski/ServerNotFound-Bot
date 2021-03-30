module.exports = (client) => {
  
    client.on('guildMemberRemove', (member) => {
      const message = `<@${
        member.id
      }> właśnie wyszedł z serwera.`
  
      client.channles.cache.get('789543225865666571').send(message)
    })
  }