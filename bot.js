const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'
 
 
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
 
 
client.login(process.env.BOT_TOKEN);

```JS 
client.on('message', message => {
      if(message.content.startsWith ("p-marry")) {
      if(!message.channel.guild) return message.reply('**This command only for servers**')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' +2D3eDw **منشن من يلي تبي تتزوجها**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' +2D3eMw **You can only marry one girl**').catch(console.error);
       if(proposed === message.author) return message.reply(`**.**`);
        if(proposed === client.user) return message.reply(`** هل تقبل الزواد منها؟**`);
              message.channel.send(`**${proposed} 
 Do you accept ${message.author} marry request
 You have 30 sec
 Write موافق or ارفض**`)

const filter = m => m.content.startsWith("موافق");
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} +Bkg ${proposed} Congratolations you are now married don't miss honey month! +2D3ccA +2DzfiQ** `);
})

   const filte = m => m.content.startsWith("no");
message.channel.awaitMessages(filte, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} he don't accept so the marry ended +2D3eFA** `);
})

  }
});
const prefix = "-" // البرفكس
client.on("message", (message) => {
    if (message.author.bot) return;
    if (0 != message.content.indexOf(prefix)) return;
    const [command, ...args] = message.content.slice(prefix.length).split(/ +/g);
    if (command === "role") { // غير اسم الامر من هنا
        let freeRole = message.guild.roles.find(role => role.name == "اسم الرول الي راح ياخذه من الامر");
        if (!freeRole) return message.reply("Hey, this role seems to be deleted i can\'t find it");
        if (message.member.roles.some(role => role.name == freeRole.name)) {
            message.member.removeRole(freeRole).then(() => {
                message.reply("the role removed !")
            })
            .catch(() => {
                message.reply("something went wrong, i can\'t remove the role from you.")
            });;
        } else {
            message.member.addRole(freeRole)
                .then(() => {
                    message.reply("you got it!")
                })
                .catch(() => {
                    message.reply("something went wrong, i can\'t give you the role.")
                });
        }
    }
});

ient.on('message' , async (message) => {
var prefix = "-"
    if(message.content.startsWith(prefix + "topinvite")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 10) {//يمديك تعدل رقم وصول العدد حق الانفايت الى اأقل أو أكثر
          message.member.addRole(message.member.guild.roles.find("name",""))//هنآ أسم ألرتبه اللي تجيهه
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 20) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
!if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name",""))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }//codes
});
