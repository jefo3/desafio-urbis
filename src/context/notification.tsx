/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
import React, { createContext, useContext, useEffect, useState } from 'react';

interface NotificationData {
  id: string;
  message: string;
  worn: string;
  hora?: Date;
  unread?: boolean;
}

interface NotificationContextProps {
  data: Array<NotificationData>;
  qntNotification: number;
  addItem: ({ id, message, worn }: NotificationData) => void;
}

interface TypeContextProvider {
  children: React.ReactNode;
}

const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps,
);

export function NotificationContextProvider({ children }: TypeContextProvider) {
  const [data, setData] = useState<Array<NotificationData>>([]);
  const [qntNotification, setQntNotification] = useState(0);
  const addItem = ({ id, hora, message, worn }: NotificationData): void => {
    setData([...data, { hora, id, message, worn }]);
  };

  useEffect(() => {
    setQntNotification(data.length);
  }, [data]);

  return (
    <NotificationContext.Provider value={{ data, qntNotification, addItem }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification(): NotificationContextProps {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error('useNotification must be within an AuthProvider');
  return context;
}
