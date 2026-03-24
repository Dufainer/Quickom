/**
 * Handles menu display requests from WhatsApp messages.
 */
async function sendMenu(sock, jid) {
  // TODO: fetch available products from REST API
  // TODO: format menu as WhatsApp message
  // TODO: send menu message to jid
}

async function sendCategory(sock, jid, category) {
  // TODO: filter products by category and send
}

module.exports = { sendMenu, sendCategory };
