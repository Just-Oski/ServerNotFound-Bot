module.exports = (client) => {
    const isInvite = async (guild, code) => {
      return await new Promise((resolve) => {
        guild.fetchInvites().then((invites) => {
          for (const invite of invites) {
            if (code === invite[0]) {
              resolve(true)
              return
            }
          }
  
          resolve(false)
        })
      })
    }
  
    client.on('message', async (message) => {
      const { guild, member, content } = message
  
      // discord.gg/23RAN4
  
      const code = content.split('discord.gg/')[1]
      console.log('CODE:', code)
  
      if (content.includes('discord.gg/')) {
        const isOurInvite = await isInvite(guild, code)
        if (!message.member.permissions.has("MANAGE_MESSAGES")){
            if (!isOurInvite) {
                message.delete({function: 0000})
                message.channel.send('Nie, spierdalaj.')
            }
        }
      }
    })
  }