const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const chalk = require('chalk')

const { MessageEmbed } = require(`discord.js`)



client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(chalk.yellow(`Loading command ${file}`));
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(chalk.yellow(`Loading discord.js event ${file}`));
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

var currentdate = new Date(); 
var datetime = "" + currentdate.getDate() + "/"
+ (currentdate.getMonth()+1)  + "/" 
+ currentdate.getFullYear()
const memberCount = require('./events/membercount')
const antiAd = require('./events/anti-ad')
client.on('ready', () => {
memberCount(client)
antiAd(client)
})

client.on("message", (message) => {
    let blacklisted = ['701689432398495866', '750243782137741344', '802492442862813184', '700801069374242897', '801365546309517332', '792718514540118026', '786945498706608148', '802612460259115009'];
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    if (foundInText) {
      message.delete({function: 0000})
      var embed = new MessageEmbed()
        .setTitle(`❗ AUTOMOD ❗`)
        .setColor('#8f0e00')
        .setDescription('Już nie licze ile ja tych reklam blokuje... / Zablokowałem kolejną hamską reklamę.')
        .addField(`Kiedy?`, datetime, true)
        .addField(`Gdzie?`, message.channel.name, true)
      console.log(chalk.bgWhite(chalk.black('Zablokowano kolejną hamską reklamę.')))
    }

})

client.login(client.config.discord.token);