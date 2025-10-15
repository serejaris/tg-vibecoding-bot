# Telegram Echo Bot (Node.js + Telegraf)

@vibecoding_ug_bot

Минимальный Telegram-бот, который отвечает на команды `/start`, `/help` и повторяет любой текст (эхо). Построен на Node.js (CommonJS) и Telegraf, использует long polling для локальной разработки.

## Требования
- Node.js >= 18
- Токен Telegram-бота (`BOT_TOKEN`) от [@BotFather](https://t.me/BotFather)

## Установка
1. Установите зависимости:
```bash
npm install
```
2. Скопируйте `.env.example` в `.env` и укажите ваш токен:
```bash
cp .env.example .env
# затем отредактируйте .env и задайте BOT_TOKEN=...
```

## Скрипты
- `npm start` — запустить бота
- `npm run dev` — запустить с nodemon (автоперезапуск при изменениях)

## Поведение
- `/start` — отправляет приветствие
- `/help` — показывает список команд
- Любое текстовое сообщение — бот отвечает `Эхо: <текст>`
- Нетекстовые обновления (стикеры, фото и т. п.) безопасно игнорируются

## Запуск
```bash
npm start
```
Нажмите Ctrl+C для остановки. Бот корректно завершает работу при SIGINT/SIGTERM.

## Структура проекта
```
src/
  index.js
  handlers/
    start.js
    help.js
    echo.js
.env.example
.gitignore
package.json
README.md
```

## Примечания
- При старте бот удаляет устаревший webhook и переключается на long polling.
- По замыслу не использует базу данных и внешнее состояние.
