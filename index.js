
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('7128024687:AAGSROlHxA1F5eshJNWwm_2N1n4VaPueS28')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.on(message("photo"),(msg)=>console.log(msg))    
bot.launch()
// msg.forwardMessage(1312290405)