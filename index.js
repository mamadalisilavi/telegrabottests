const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf('7128024687:AAGvDiRYy_ynG5Pr6tGRz-Pi9HyoopPUm6M');

// Listen for messages
bot.on('text', (ctx) => {
  // Check if the message text is 'Hello'
  if (ctx.message.text.toLowerCase() === 'hello') {
    // Reply with 'Hi'
    ctx.reply('Hi');
  }
});

// Launch the bot
bot.launch();

// Log when the bot is started
console.log('Bot is up and running');
