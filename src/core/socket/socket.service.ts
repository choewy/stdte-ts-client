import { Manager, Socket } from 'socket.io-client';

import { AppConfig } from '@config';

export class SocketService extends Socket {
  constructor(nsp: string = '', query?: Record<string, any>) {
    super(
      new Manager(new AppConfig().getServerUrl(), {
        transports: ['websocket'],
        withCredentials: true,
        reconnection: true,
        autoConnect: false,
        query,
      }),
      nsp.startsWith('/') ? nsp : `/${nsp}`,
    );
  }
}
