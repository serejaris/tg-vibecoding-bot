'use strict';

module.exports = function handleEcho(ctx) {
  const text = ctx.message && ctx.message.text;
  if (typeof text === 'string' && text.trim().length > 0) {
    return ctx.reply(`Эхо-бунт: ${text}`);
  }
  return undefined;
};


