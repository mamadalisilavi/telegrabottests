
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const commands = [
    { command: '/start', description: 'Start the bot' },
    { command: '/help', description: 'Get help' },
    { command: '/about', description: 'About the bot' },
  ];
const bot = new Telegraf('7128024687:AAGSROlHxA1F5eshJNWwm_2N1n4VaPueS28')
async () => {
    // Set the bot commands
    await bot.telegram.setMyCommands(commands);
  
    // Set the chat menu button to display the command list
    await bot.telegram.setChatMenuButton({
      type: 'commands',
    });
  
    console.log('Commands and chat menu button set successfully.');
  }

bot.start((ctx) => ctx.reply('Welcome'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.on(message("document"),(msg)=>{
    msg.forwardMessage(1312290405,msg.update.message.message_id)
    
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