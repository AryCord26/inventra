import React, {
  createContext,
  useState
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { authService } from '../services/authService';

export const AuthContext = createContext({} as any);

export function AuthProvider({
  children
}: any) {

  const [user, setUser] = useState(null);

  async function login(
    email: string,
    password: string
  ) {

    const response =
      await authService.login(
        email,
        password
      );

    await AsyncStorage.setItem(
      'token',
      response.token
    );

    setUser(response.user);
  }

  async function logout() {

    await AsyncStorage.removeItem(
      'token'
    );

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
