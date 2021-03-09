
const chalk = require('chalk')

module.exports = async (client) => {
    console.log(chalk.greenBright(`Gotowy!`));
    // client.user.setPresence({
    //     status: "offline",  // You can show online, idle... Do not disturb is dnd
    //     game: {
    //         name: "?help",  // The message shown
    //         type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
    //     }
    // });
    client.user.setActivity('Grand Theft ServerNotFound V', { type: 'PLAYING' });
};