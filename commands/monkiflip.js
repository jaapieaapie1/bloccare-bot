const Discord = require('discord.js');
module.exports = {
    name: 'monkiflip',
    description: 'announcement command',
    execute(message, args){
        var wednesday = new Discord.MessageEmbed()
        .setColor('#fc2c03')
        .setImage('https://media.tenor.com/images/44840400faa997ecd2ff27785cd4e6d8/tenor.gif')
        .setTimestamp();

        message.channel.send(wednesday);
    }
}