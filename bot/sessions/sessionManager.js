const { createClient } = require('redis');

let client;

async function getClient() {
  if (!client) {
    client = createClient({ url: process.env.REDIS_URL || 'redis://localhost:6379' });
    client.on('error', (err) => console.error('[redis] client error', err));
    await client.connect();
  }
  return client;
}

/**
 * Retrieves the session for a given jid (WhatsApp ID).
 * Returns an empty object if no session exists.
 */
async function getSession(jid) {
  // TODO: deserialize and return session object
  const redis = await getClient();
  const raw   = await redis.get(`session:${jid}`);
  return raw ? JSON.parse(raw) : {};
}

/**
 * Persists the session for a given jid with a TTL of 30 minutes.
 */
async function setSession(jid, data) {
  // TODO: set appropriate TTL per flow state
  const redis = await getClient();
  await redis.set(`session:${jid}`, JSON.stringify(data), { EX: 1800 });
}

/**
 * Clears the session for a given jid.
 */
async function clearSession(jid) {
  const redis = await getClient();
  await redis.del(`session:${jid}`);
}

module.exports = { getSession, setSession, clearSession };
