const Discord = require('discord.js');
module.exports = {
    name: 'suggest',
    description: 'announcement command',
    execute(message, args){

        var splicer = "|"

        if (args[0] == null) {
            var useMessage = new Discord.MessageEmbed()
            .setTitle('Usage')
            .setColor('#fc2c03')
            .setDescription(`Make a suggestion to the team with: \n suggest [suggestion]`);

            return message.reply(useMessage);
        }

        var argsList = args.join(" ").split(splicer);


        var options = {
            msg: argsList[0].trim()
        }
        var channelID = "794938632087142420"

        var announcement = new Discord.MessageEmbed()
        .setTitle(`Suggestion by ${message.author.username}`)
        .setDescription(options.msg)
        .setColor("#fc2c03")

        var channel = message.member.guild.channels.cache.find(channels => channels.id === channelID);
        if(!channel) return message.reply("This channel doesn't excist");

        channel.send(announcement);

        message.reply("Thanks! The team now received your suggestion! They will take it into consideration as fast as possible!").then(msg => msg.delete({timeout: 3000}));
    }
}