const logger = require('@mirasaki/logger');
const chalk = require('chalk');

module.exports = (client, message) => {

    // Ignore messages from bots
    if (message.author.bot) return;

    message.reply()
  // Logging message to developers
    logger.info(`L'utilisateur ${ message.author } à envoyé ${ message.content }`);
};