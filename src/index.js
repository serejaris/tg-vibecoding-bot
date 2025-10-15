'use strict';

require('dotenv').config();
const { Telegraf } = require('telegraf');

const handleStart = require('./handlers/start');
const handleHelp = require('./handlers/help');
const handleVibe = require('./handlers/vibe');
const handleVibeWorkflow = require('./handlers/vibe_workflow');
const handleVibeStart = require('./handlers/vibe_start');
const handleVibePractices = require('./handlers/vibe_practices');
const handleVibeProsCons = require('./handlers/vibe_pros_cons');

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
  bot.command('vibe', handleVibe);
  bot.command('vibe_workflow', handleVibeWorkflow);
  bot.command('vibe_start', handleVibeStart);
  bot.command('vibe_practices', handleVibePractices);
  bot.command('vibe_pros_cons', handleVibeProsCons);

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


