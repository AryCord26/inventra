'use client';

import {
  createContext,
  useState,
  useEffect
} from 'react';

import { authService } from '../services/authService';

interface AuthContextType {
  user: any;
  login: (
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {

    const token =
      localStorage.getItem('token');

    if (token) {

      authService
        .profile()
        .then(setUser)
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
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
