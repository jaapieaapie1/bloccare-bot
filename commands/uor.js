const Discord = require('discord.js');
module.exports = {
    name: 'uor',
    description: 'announcement command',
    execute(message, args){

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You can't use this command!");

        var splicer = "|"

        if (args[0] == null) {
            var useMessage = new Discord.MessageEmbed()
            .setTitle('Usage')
            .setColor('#fc2c03')
            .setDescription(`Make a OR News message with: \n /uor image link ${splicer} message`);

            return message.reply(useMessage);
        }

        var argsList = args.join(" ").split(splicer);


        var options = {
            image: argsList[0],
            msg: argsList[1].trim()
        }
        var channelID = "742402774511255654"

        var announcement = new Discord.MessageEmbed()
        .setTitle(":newspaper: Unofficial OR News")
        .setDescription(options.msg)
        .setColor("#CCD6DD")
        .setFooter(`Posted by ${message.author.username}`)
        .setImage(options.image)

        var channel = message.member.guild.channels.cache.find(channels => channels.id === channelID);
        if(!channel) return message.reply("This channel doesn't excist");

        channel.send(announcement);

        message.reply("Announcement has been posted!");
        console.log("A news message has been posted")
    }
}