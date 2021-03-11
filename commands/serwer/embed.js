var Discord = require('discord.js');
const {
    Permissions: { FLAGS },
  } = require("discord.js")

module.exports = {
    name: "embed",
    async execute(msg, channel, client){
        const embed = new Discord.MessageEmbed()
        .setTitle('***CHILL SMP***')
        .addField('IP:', 'chillsmp1200.aternos.me')
        .addField('Wersja:', '1.16.5')
        .addField('Serwer:', 'Premium only')
        .addField('Co zrobić żeby grać na serverze?', 'Musisz wbić 3lvl i napisać do <@775396938614177802> z twoim nickiem na mc')
        .setImage('https://media.discordapp.net/attachments/819210989341114368/819211125169324102/Chill-SMP_2.png')
        
        const embed2 = new Discord.MessageEmbed()
        .setTitle('TxT')
        .setDescription('Kolejność ustawiania taka jak tutaj:')
        .addField('BrewingCanvas', 'https://www.curseforge.com/minecraft/texture-packs/brewingcanvas-potion-cheatsheet')
        .addField('Nautilus', 'https://www.curseforge.com/minecraft/texture-packs/nautilus3d')
        .addField('Relistic Squids', 'https://www.planetminecraft.com/texture-pack/realistic-squids/')
        .addField('Biome Mobs', 'https://www.reddit.com/r/Minecraft/comments/exw22k/i_created_a_texture_pack_that_includes_144/')
        .addField('Better Leaves', 'https://www.curseforge.com/minecraft/texture-packs/better-leaves-add-on-2-0/screenshots')
        .addField('Mushroom Plus', 'https://www.curseforge.com/minecraft/texture-packs/mushrooms-plus')
        .addField('*Fully Aged Crops*', 'https://www.curseforge.com/minecraft/texture-packs/fully-aged-crop-marker')
        client.channels.cache.get('819210989341114368').send(embed)
        client.channels.cache.get('819210989341114368').send(embed2)
    }
}