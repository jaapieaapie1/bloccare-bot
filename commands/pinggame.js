const Discord = require('discord.js');
module.exports = {
    name: 'pinggame',
    description: 'announcement command',
    execute(message, args){

        var splicer = "|"

        if (args[0] == null) {
            var useMessage = new Discord.MessageEmbed()
            .setTitle('Usage')
            .setColor('#fc2c03')
            .setDescription(`Play the pinggame with a friend via: \n /pinggame @user`);

            return message.reply(useMessage);
        }

        var announcement = new Discord.MessageEmbed()
        .setTitle('Bloccare - Ping Game')
        .setColor('#fc2c03')
        .setImage('https://cdn.discordapp.com/attachments/767311240124301322/780442405978898502/image0.png')
        .setTimestamp();

        message.channel.send(announcement);
    }
}