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

interface RemoveType {
  id: string;
}

interface NotificationContextProps {
  data: Array<NotificationData>;
  qntNotification: number;
  addItem: ({ id, message, worn }: NotificationData) => void;
  removeItem: ({ id }: RemoveType) => void;
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

  const removeItem = ({ id }: RemoveType): void => {
    console.log(
      'removido',
      data.filter((benefits) => benefits.id !== id),
    );
    setData(data.filter((benefits) => benefits.id !== id));
  };
  useEffect(() => {
    setQntNotification(data.length);
  }, [data]);

  return (
    <NotificationContext.Provider
      value={{ data, qntNotification, addItem, removeItem }}
    >
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
