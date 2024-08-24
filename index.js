
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('7128024687:AAGvDiRYy_ynG5Pr6tGRz-Pi9HyoopPUm6M')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
