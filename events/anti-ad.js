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
  

  
      if (content.includes('discord.gg/')) {
        const discord = require('discord.js')
        if (!message.member.permissions.has("MANAGE_MESSAGES")){
        const code = content.split('discord.gg/')[1]
        console.log('CODE:', code)
        const isOurInvite = await isInvite(guild, code)
            if (!isOurInvite) {
                message.delete({function: 0000})
                message.channel.send('Nie, spierdalaj.')

                const embed = new discord.MessageEmbed()
                .setTitle('AUTOMOD.exe')
                .setDescription('Yo, chłop się reklamuje to mu skróciłem język')
                .addField('Gdzie?', `<#${message.channel.id}>`, true)
                .addField('Kto?', `${message.author}`, true)
                .addField('Kiedy?', 'Przed chwilą', true)
                .addField('Zaproszenie:', `https://discord.gg/${code}`)
                .setColor('#e8e4d5')
                client.channels.cache.get('816997116697640960').send(embed)
            }
        }
      }
    })
  }