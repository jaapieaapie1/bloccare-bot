const Discord = require('discord.js');
module.exports = {
    name: 'credits',
    description: 'Credits command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#fc2c03')
        .setTitle("Bloccare - Credits")
        .setDescription("Thanks to all these people for spending their time on creating for Bloccare!")
        .addField("Original Creators", "> TheTimeKing \n> Titanium")
        .addField("Logo Creator", "> Macarena")
        .addField("Bot Developer", "> Neddo")
        .addField("Render Creators", "> PringleBeaver \n> CROOTROM")
        .addField("Model Creators", "> Macarena \n> XERON39 \n> CROOTROM")
        .addField("Emoji Creators", "> Macarena \n> XERON39 \n> PringleBeaver \n> Venixalis")
        .setThumbnail('https://i.imgur.com/FL05hhq.png')
        .setTimestamp()
        .setFooter('Team Bloccare')
        message.channel.send(embed);
    }
}