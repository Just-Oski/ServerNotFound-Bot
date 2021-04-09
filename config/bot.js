const dotenv = require('dotenv').config({ path: __dirname + "/./../.env" })
module.exports = {
    emojis: {
        off: ':x:',
        error: ':warning:',
        queue: ':bar_chart:',
        music: ':musical_note:',
        success: ':white_check_mark:',
        smutek: '<:pepocry1:786148711356301332>',
        brawo: '<a:clappypepe:773861411645816843>',
        keka: '<:keka:791404113970593852>'
    },
    owner: '441681052885581877',
    discord: {
        token: process.env.token,
        prefix: '?',
    },
};