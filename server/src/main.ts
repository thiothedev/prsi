import { Server } from 'socket.io';

import { DEFAULT_SOCKET_PORT } from './utils/constants';

// Ports
export const socketPort =
  Number(process.env.SOCKET_PORT) || DEFAULT_SOCKET_PORT;

// Socket.io Server
const io = new Server(socketPort);

// Handling Connections
io.on('connection', (socket) => {
  console.log(`Connection: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Disconnect: ${socket.id}`);
  });
});
