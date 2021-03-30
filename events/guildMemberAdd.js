module.exports = (client) => {
  
    client.on('guildMemberAdd', (member) => {
      const message = `<@${
        member.id
      }> właśnie zjawił się na naszym serwerze!!`
  
      client.channles.cache.get('773615256127012882').send(message)
    })
  }