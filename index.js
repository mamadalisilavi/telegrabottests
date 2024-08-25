
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf('7128024687:AAGSROlHxA1F5eshJNWwm_2N1n4VaPueS28')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.on(message("photo"),(msg)=>msg.forwardMessage(1312290405,msg.update.message.message_id))    
bot.launch()
// msg.forwardMessage(1312290405)

// message_id: 239,
// from: [Object],
// chat: [Object],
// date: 1724608055,
// photo: [Array]
// }
// },
// telegram: Telegram {
// token: '7128024687:AAGSROlHxA1F5eshJNWwm_2N1n4VaPueS28',
// response: undefined,
// options: {
// apiRoot: 'https://api.telegram.org',
// apiMode: 'bot',
// webhookReply: true,
// agent: [Agent],
// attachmentAgent: undefined,
// testEnv: false
// }
// },
// botInfo: {
// id: 7128024687,
// is_bot: true,
// first_name: 'spiritTestMamad_bot',
// username: 'spiritmamad_bot',
// can_join_groups: true,
// can_read_all_group_messages: false,
// supports_inline_queries: false,
// can_connect_to_business: false,
// has_main_web_app: false
// },
// state: {}
// }