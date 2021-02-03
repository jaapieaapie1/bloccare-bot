const botConfig = require("./botconfig.json");

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = botConfig.prefix;

const fs = require('fs');

const ideaChannel = '737722179373891656';

const suggestChannel = '794938632087142420';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bloccare Bot is online!');
    client.user.setActivity("/help | Bloccare", {type: "PLAYING"})
}); 

client.on('message', async message => {
    if (message.channel.id === ideaChannel) {
        try {
          await message.react(':updoot:769955474774032424');
          await message.react(':downdoot:769955474832621600');
        } catch(err) {
          console.error(err);
        }
      }
})
client.on('message', async message => {
    if (message.channel.id === suggestChannel) {
        try {
          await message.react(':updoot:769955474774032424');
          await message.react(':downdoot:769955474832621600');
        } catch(err) {
          console.error(err);
        }
      }
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help') {
        client.commands.get('help').execute(message, args);
    }
    if(command === 'announce') {
        client.commands.get('announce').execute(message, args);
    } 
    if(command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    if(command === 'pinggame') {
        client.commands.get('pinggame').execute(message, args);
    }
    if(command === 'wednesday') {
        client.commands.get('wednesday').execute(message, args);
    }
    if(command === 'advent') {
    client.commands.get('advent').execute(message, args);
    }
    if(command === 'credits') {
        client.commands.get('credits').execute(message, args);
    }
    if(command === 'monkiflip') {
        client.commands.get('monkiflip').execute(message, args);
    }
    if(command === 'uor') {
        client.commands.get('uor').execute(message, args);
    }
    if(command === 'suggest') {
        client.commands.get('suggest').execute(message, args);
    }
})

client.login(botConfig.token);
