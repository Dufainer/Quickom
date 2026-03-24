async function webhook(req, res, next) {
  try {
    // TODO: verify MercadoPago signature, update order payment status
    console.log('[payment] webhook received', req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

async function getByOrder(req, res, next) {
  try {
    // TODO: query payments table by order_id
    res.json([]);
  } catch (err) {
    next(err);
  }
}

module.exports = { webhook, getByOrder };
