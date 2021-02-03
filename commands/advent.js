const Discord = require('discord.js');
module.exports = {
    name: 'advent',
    description: 'announcement command',
    execute(message, args){

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You can't use this command!");

        var splicer = "|"

        if (args[0] == null) {
            var useMessage = new Discord.MessageEmbed()
            .setTitle('Usage')
            .setColor('#fc2c03')
            .setDescription(`Make an announcement with: \n -announce Title ${splicer} Message ${splicer} Color (in HEX code) ${splicer} imgur image link ${splicer} Channel name (no # needed)`);

            return message.reply(useMessage);
        }

        var argsList = args.join(" ").split(splicer);

        if(argsList[2] === undefined) argsList[2] = "#fc2c03";
        if(argsList[3] === undefined) argsList[3] = " ";
        if(argsList[4] === undefined) argsList[3] = "announcements";


        var options = {
            title: argsList[0],
            message: argsList[1] || "No message given.",
            color: argsList[2].trim(),
            image: argsList[3].trim(),
            channel: argsList[4].trim()
            
        }

        var announcement = new Discord.MessageEmbed()
        .setTitle(options.title)
        .setColor(options.color)
        .setDescription(` ${options.message}`)
        .setImage(options.image)

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.channel);
        if(!channel) return message.reply("This channel doesn't excist");

        channel.send(announcement);

        message.reply("Announcement has been posted!");
    }
}