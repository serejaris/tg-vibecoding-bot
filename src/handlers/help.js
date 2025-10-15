'use strict';

module.exports = function handleHelp(ctx) {
  return ctx.reply(
    'Вот список доступных команд:\n' +
      '/start - Начать взаимодействие с ботом\n' +
      '/help - Показать это справочное сообщение\n' +
      '/vibe - Введение в вайб-кодинг\n' +
      '/vibe_workflow - Рабочий процесс вайб-кодинга\n' +
      '/vibe_start - Начало работы с вайб-кодингом\n' +
      '/vibe_practices - Лучшие практики\n' +
      '/vibe_pros_cons - Преимущества и ограничения'
  );
};


