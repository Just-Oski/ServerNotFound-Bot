
const chalk = require('chalk')

module.exports = async (client) => {
    const activities_list = [
        "CHILL SMP", 
        "Wersja: 1.16.5",
        "Ip: chillsmp1200.aternos.me", 
        "Premium only"
        ];
    console.log(chalk.greenBright(`Gotowy!`));
    // client.user.setPresence({
    //     status: "offline",  // You can show online, idle... Do not disturb is dnd
    //     game: {
    //         name: "?help",  // The message shown
    //         type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
    //     }
    // // });
    // client.user.setActivity('CHILL SMP', { type: 'PLAYING' });
    client.on('ready', () => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        setInterval(() => {
            client.user.setActivity(activities_list[index], {type: 'PLAYING'});
        }, 1000)})
};