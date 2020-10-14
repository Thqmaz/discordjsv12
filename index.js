const Discord = require('discord.js');
const bot = new Discord.Client({ disableEveryone: false });
const config = require("./config.json");

bot.on("ready", async() => {
    console.log(`${bot.user.username} started up successfully`)
});

bot.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "ping") {
        message.reply("Pong!")
    }
});

bot.login(config.token)