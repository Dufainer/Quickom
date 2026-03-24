/**
 * Handles order-related actions triggered from WhatsApp messages.
 */
async function handleOrder(sock, jid, data) {
  // TODO: confirm order with customer
  // TODO: call REST API to persist order
  // TODO: send order summary message
}

async function handleOrderStatus(sock, jid, orderId) {
  // TODO: fetch order status from REST API
  // TODO: reply with current status
}

module.exports = { handleOrder, handleOrderStatus };
