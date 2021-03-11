
const chalk = require('chalk')

module.exports = async (client) => {

    console.log(chalk.greenBright(`Gotowy!`));
    // client.user.setPresence({
    //     status: "offline",  // You can show online, idle... Do not disturb is dnd
    //     game: {
    //         name: "?help",  // The message shown
    //         type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
    //     }
    // // });
    client.user.setActivity('Chill SMP | Ip: chillsmp1200.aternos.me | Wersja: 1.16.5 | Only Premium', { type: 'PLAYING' });

};