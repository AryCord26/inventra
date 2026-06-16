'use client';

import {
  createContext,
  useState,
  useEffect,
  ReactNode
} from 'react';

import { authService } from '../services/authService';

interface AuthContextType {
  user: any;

  login: (
    email: string,
    password: string
  ) => Promise<any>;

  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType
  );

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {

  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {

    const token =
      localStorage.getItem('token');

    if (token) {

      authService
        .profile()
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }

  }, []);

  async function login(
    email: string,
    password: string
  ) {

    const response =
      await authService.login(
        email,
        password
      );

    localStorage.setItem(
      'token',
      response.token
    );

    setUser(response.user);

    return response.user;
  }

  function logout() {

    localStorage.removeItem('token');

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
