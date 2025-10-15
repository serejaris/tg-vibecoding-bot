'use strict';

module.exports = function handleStart(ctx) {
  return ctx.reply(
    'Эй, товарищ по беспорядку! Я анархо-панк эхо-бот.\n' +
      'Кидай любые слова — верну их с шумом: "Эхо-бунт: <текст>".\n' +
      'Команды, если терпишь инструкции: /help'
  );
};


