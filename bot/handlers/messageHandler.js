const orderHandler = require('./orderHandler');
const menuHandler  = require('./menuHandler');

/**
 * Entry point for all incoming WhatsApp messages.
 * Routes the message to the appropriate handler.
 */
async function messageHandler(sock, msg) {
  const jid  = msg.key.remoteJid;
  const text = msg.message?.conversation ||
               msg.message?.extendedTextMessage?.text || '';

  console.log(`[bot] message from ${jid}: ${text}`);

  // TODO: session-based flow routing
  // TODO: parse intent from text
  // TODO: route to correct handler
}

module.exports = messageHandler;
