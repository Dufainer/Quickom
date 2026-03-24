require('dotenv').config();
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
} = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const qrcode      = require('qrcode-terminal');
const messageHandler = require('./handlers/messageHandler');

async function connectToWhatsApp() {
  const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`[bot] Baileys version: ${version.join('.')} — latest: ${isLatest}`);

  const { state, saveCreds } = await useMultiFileAuthState(
    process.env.WHATSAPP_SESSION || 'quickom-session'
  );

  const sock = makeWASocket({ version, auth: state });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
    if (qr) {
      console.log('[bot] Scan the QR code with WhatsApp:');
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const shouldReconnect =
        new Boom(lastDisconnect?.error)?.output?.statusCode !==
        DisconnectReason.loggedOut;
      console.log('[bot] connection closed — will reconnect:', shouldReconnect);
      if (shouldReconnect) connectToWhatsApp();
    } else if (connection === 'open') {
      console.log('[bot] WhatsApp connection open');
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    for (const msg of messages) {
      if (!msg.key.fromMe) {
        await messageHandler(sock, msg);
      }
    }
  });
}

connectToWhatsApp().catch(console.error);
