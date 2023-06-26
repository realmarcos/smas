# SMAS - Simplified Monitoring and Alert System

Um sistema simples para monitorar aplicações web e aletar quando estiver offline.

## Instalação

cd backend
npm install
cp .env.example .env

Por enquanto a notificação funciona apenas por telegram. 
- Crie um bot com o BotFather do telegram 
- Pegue o token do bot
- Pegue o chatId da conversa com o bot com getChatId

adicione nas variavéis de ambiente *TELEGRAM_TOKEN* e *TELEGRAM_CHAT_ID*

npm start
