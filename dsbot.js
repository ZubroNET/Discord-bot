const Discord = require('discord.js');
const schedule = require('node-schedule');
const client = new Discord.Client();
var fotky = [
  'https://cdn.discordapp.com/attachments/430022240948453390/430032114247925771/25590619_1672764072744066_559180730_o.jpg',
  'https://cdn.discordapp.com/attachments/430022240948453390/430032137949937665/26551739_772303366299545_173361624_n.jpg',
  'https://cdn.discordapp.com/attachments/430022240948453390/430032161631109122/27018726_778380709025144_640704425_o.png',
  'https://cdn.discordapp.com/attachments/430022240948453390/430032192316637195/28277960_1733942409959565_137318236_o.jpg',
  'https://cdn.discordapp.com/attachments/430022240948453390/430032217431998466/29496343_1766682933352179_1401751512937398272_o.jpg',
  'https://cdn.discordapp.com/attachments/430022240948453390/430032381668229130/29472415_1765483243472148_8442430271000674304_n.jpg',
  'https://cdn.discordapp.com/attachments/430022240948453390/430806301929504769/14872429_1260389683981509_1244742331_n.jpg'
];
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.author.username == 'Hafiky') {
    msg.reply('Pchosim', {
      file: fotky[Math.floor(Math.random() * fotky.length)]
    });
  }

  if (msg.content === 'pchosim') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          //msg.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    }
  }
});

var j = schedule.scheduleJob('* 2 * * *', function(){
  var channel = client.channels.find('name', 'general');
  channel.send('Čas na monstra', {
    file: 'https://cdn.discordapp.com/attachments/430022240948453390/430314034856853514/monster-flickr-220.jpg'
  });
});

client.login('NDMwMDIzMDQxNDAyMDExNjUx.DaKJwA.TqVqa30oQ1ZGojDcVmkcY-B-PZs');
