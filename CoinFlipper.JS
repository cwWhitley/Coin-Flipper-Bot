const Discord = require("discord.js")
const client = new Discord.Client()
var value = 0
var answer = ""

function valueChanger() {
value = Math.round(Math.random())
return value;                                               
}



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "$flip") {
    valueChanger();
    if (value == 1) {
      msg.channel.send({embed: {
  color: 3447003,
  title: "Coinflip Results",
  image: {
    url: 'https://i.imgur.com/vP6Q0SP.gif'
  },
  fields: [{
    name: (msg.member.displayName + " flipped a coin and got Heads!"),
    value: "+1!",
  },
  ],
}});
      return;
    } else if (value !== 1); {
      msg.channel.send({embed:{
    color:3447003,
    title: "Coinflip Results",
    image: {
      url: 'https://i.imgur.com/MDVmzC0.gif'
    },
    fields: [{
      name: (msg.member.displayName + " flipped a coin and got Tails :c"),
      value: "+0",
    }],
    },
   }
      )
  }
}});

client.login(process.env.TOKEN)
const mySecret = process.env['TOKEN']
.TOKEN
