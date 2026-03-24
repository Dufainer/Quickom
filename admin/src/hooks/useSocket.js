import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

/**
 * Connects to the Socket.io server and returns the socket instance.
 * Automatically disconnects on unmount.
 */
export function useSocket(url = '/') {
  const socketRef = useRef(null);

  useEffect(() => {
    // TODO: add auth token to handshake
    socketRef.current = io(url);

    return () => {
      socketRef.current?.disconnect();
    };
  }, [url]);

  return socketRef.current;
}
