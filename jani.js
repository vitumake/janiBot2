const Discord = require('discord.js');
const config = {
    botConf,
    musicConf,
} = require("./bot.json");
//Discord bot client stuff
const client = new Discord.Client();
client.login(botConf.token);
