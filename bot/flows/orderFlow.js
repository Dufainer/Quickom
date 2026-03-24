/**
 * Multi-step conversational flow for placing an order via WhatsApp.
 * Each step is a function that receives the session and user input,
 * and returns the next step name or null to end the flow.
 */

const steps = {
  async greeting(session, sock, jid, text) {
    // TODO: send welcome message with main menu options
    return 'selectCategory';
  },

  async selectCategory(session, sock, jid, text) {
    // TODO: show product categories
    return 'selectProduct';
  },

  async selectProduct(session, sock, jid, text) {
    // TODO: show products in selected category
    return 'confirmOrder';
  },

  async confirmOrder(session, sock, jid, text) {
    // TODO: show order summary and ask for confirmation
    return 'payment';
  },

  async payment(session, sock, jid, text) {
    // TODO: send payment link
    return null; // flow ends
  },
};

async function runStep(stepName, session, sock, jid, text) {
  // TODO: execute step and update session
  const step = steps[stepName];
  if (!step) return null;
  return step(session, sock, jid, text);
}

module.exports = { runStep, steps };
