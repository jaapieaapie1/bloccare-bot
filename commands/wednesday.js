const Discord = require('discord.js');
module.exports = {
    name: 'wednesday',
    description: 'announcement command',
    execute(message, args){
        var wednesday = new Discord.MessageEmbed()
        .setColor('#fc2c03')
        .setImage('https://media.tenor.com/images/1747d1c447b3e31de9b24c58c72495aa/tenor.gif')
        .setTimestamp();

        message.channel.send(wednesday);
    }
}