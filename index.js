
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const bot = new Telegraf('7128024687:AAGSROlHxA1F5eshJNWwm_2N1n4VaPueS28')
const commands = [
    { command: '/start', description: 'Start the bot' },
    { command: '/help', description: 'Get help' },
    { command: '/newfile', description: 'ثبت سفارش جدید' },
];
// Set the bot commands
bot.telegram.setMyCommands(commands);

bot.telegram.setChatMenuButton({
    type: 'commands',
});

bot.start((ctx) => ctx.reply('به ربات ما خوش امدید'))
bot.command('newfile', (ctx) => {
    ctx.reply('لطفا فایل مورد نظر را ارسال کنید.')
    bot.on(message("document"), (msg) => {
        ctx.reply('اوکی لطفا عرض فایل را وارد کنید')
       
        bot.on(message("text"),(msg)=>{
            const width =  msg.update.message.text
            console.log(msg)
            ctx.reply('اوکی لطفا طول فایل را وارد کنید')
            bot.on(message("text"),(msg)=>{
                const he =  msg.update.message.text
                ctx.reply(`عرض :${width} و  طول:${he}}`)
                console.log(`عرض :${width} و  طول:${he}}`)
                msg.forwardMessage(1312290405, msg.update.message.message_id)
            })
        })
    })
})

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