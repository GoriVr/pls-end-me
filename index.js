const express = require("express");
const app = express();
const prefix = '*';

app.get("/"), (req, res) => {
  res.send("hello hell!")
}

app.listen(3000, () => {
  console.log("Project is Ready")
})
let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "*test") {
  message.channel.send('I am up and running properly!')
}
})

client.on("message", message => {
if(message.content === "*ping") {
  message.channel.send("pong!")
}
})
client.login("ODYxNTgyMjI3Mzc2ODMyNTIz.YOL4-g.3QUJ55zMukoA0zim2GV2LLxrlAg")