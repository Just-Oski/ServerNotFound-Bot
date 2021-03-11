
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
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 1000)})
};