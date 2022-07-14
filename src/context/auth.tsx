/* eslint-disable camelcase */
import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

interface UserType {
  id: string;
  name: string;
  cpfCnpj: string;
  email: string;
  whitelabelId: string;
}

interface AuthData {
  user: UserType;
  token: string;
}

interface AuthContextProps {
  data: AuthData;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

interface LoginCredentials {
  email: string;
  password: string;
  whitelabelId: string;
}

interface TypeContextProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthContextProvider({ children }: TypeContextProvider) {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@urbisAPP:token');
    const user = localStorage.getItem('@urbisAPP:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthData;
  });

  const login = async ({ email, password, whitelabelId }: LoginCredentials) => {
    const response = await api.post('/auth/user', {
      email,
      password,
      whitelabelId,
    });

    const { access_token, user } = response.data;
    localStorage.setItem('@urbisAPP:token', access_token);
    localStorage.setItem('@urbisAPP:user', JSON.stringify(user));

    setData({ token: access_token, user });
  };

  const logout = (): void => {
    localStorage.remove('@urbisAPP:token');
    localStorage.remove('@urbisAPP:user');
    setData({} as AuthData);
  };

  return (
    <AuthContext.Provider value={{ data, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be within an AuthProvider');
  return context;
}
