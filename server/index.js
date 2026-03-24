require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const http      = require('http');
const { Server } = require('socket.io');

const ordersRouter   = require('./routes/orders');
const productsRouter = require('./routes/products');
const ticketsRouter  = require('./routes/tickets');
const paymentsRouter = require('./routes/payments');
const reportsRouter  = require('./routes/reports');
const errorHandler   = require('./middleware/errorHandler');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] },
});

// ── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/orders',   ordersRouter);
app.use('/api/products', productsRouter);
app.use('/api/tickets',  ticketsRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/reports',  reportsRouter);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// ── Socket.io ────────────────────────────────────────────────────────────────
io.on('connection', (socket) => {
  console.log(`[socket] client connected: ${socket.id}`);
  socket.on('disconnect', () =>
    console.log(`[socket] client disconnected: ${socket.id}`)
  );
});

// Attach io instance so controllers can emit events
app.set('io', io);

// ── Error handler ────────────────────────────────────────────────────────────
app.use(errorHandler);

// ── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`[server] Quickom API running on http://localhost:${PORT}`)
);
