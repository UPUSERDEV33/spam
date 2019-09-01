const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608766686660657152")
setInterval(function() {
channel.send(`fazi fazi fazi fazi fazi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
