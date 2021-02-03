const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#fc2c03')
        .setTitle("Bloccare - Help")
        .addField('General', '`/help` `/suggest` `/credits`')
        .addField('Memes', '`/pinggame` `/wednesday` `/monkiflip`')
        .setThumbnail('https://i.imgur.com/NNIp3np.png')
        .setTimestamp()
        .setFooter('Team Bloccare')
        message.channel.send(embed);
    }
}