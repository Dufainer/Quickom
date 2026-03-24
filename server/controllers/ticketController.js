const Ticket = require('../models/Ticket');

async function getAll(req, res, next) {
  try {
    // TODO: filter by status, date
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (err) {
    next(err);
  }
}

async function updateStatus(req, res, next) {
  try {
    // TODO: validate status enum, notify customer via WhatsApp
    const ticket = await Ticket.updateStatus(req.params.id, req.body.status);
    req.app.get('io').emit('ticket:updated', ticket);
    res.json(ticket);
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, updateStatus };
