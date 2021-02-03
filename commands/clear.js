const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    description: 'Clear command',
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permissions to do this!");
 
    if (!args[0]) return message.reply("Please give the amount of messages you want to delete");
 
    if (Number.isInteger(parseInt(args[0]))) {
 
        var aantal = parseInt(args[0]) + 1;
 
        message.channel.bulkDelete(aantal).then(() => { 
 
            if (args[0] == 0) {
 
                message.reply(`You can't delete 0 messages -.-`).then(msg => msg.delete({timeout: 3000}));
            
            } else if (args[0] == 1) {
            
                message.reply(`I have deleted 1 messages`).then(msg => msg.delete({timeout: 3000}));
            
            } else {
            
                message.reply(`I have deleted ${args[0]} messages!`).then(msg => msg.delete({timeout: 3000}));
            
            }
 
        });
 
    } else {
        return message.reply("Give a amount");
    }
  }
}