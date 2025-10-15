'use strict';

require('dotenv').config();
const { Telegraf } = require('telegraf');

const handleStart = require('./handlers/start');
const handleHelp = require('./handlers/help');
const handleEcho = require('./handlers/echo');

const token = process.env.BOT_TOKEN;

if (!token || token.trim() === '') {
  console.error('[ERROR] Missing BOT_TOKEN in environment (.env)');
  process.exit(1);
}

const bot = new Telegraf(token);

async function launch() {
  // Drop any stale webhook and pending updates; switch to long polling
  try {
    await bot.telegram.deleteWebhook({ drop_pending_updates: true });
  } catch (err) {
    console.warn('[WARN] deleteWebhook failed (continuing):', err.message);
  }

  // Register command handlers
  bot.start(handleStart);
  bot.help(handleHelp);

  // Echo only text updates; ignore other message types to avoid noise
  bot.on('text', handleEcho);

  await bot.launch();
  console.log('[INFO] Bot launched with long polling');
}

launch();

// Graceful shutdown
process.once('SIGINT', () => {
  console.log('[INFO] Caught SIGINT, stopping bot...');
  bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
  console.log('[INFO] Caught SIGTERM, stopping bot...');
  bot.stop('SIGTERM');
});


