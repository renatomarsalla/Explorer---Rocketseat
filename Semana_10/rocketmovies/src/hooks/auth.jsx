import { useState } from 'react';
import { useEffect } from 'react';
import { createContext, useContext } from 'react';

const AuthContext = createContext();

import { api } from '../services/api.js';

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user));
      localStorage.setItem('@rocketmovies:token', token);

      console.log(user, token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível acessar');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user');
    localStorage.removeItem('@rocketmovies:token');

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token');
    const user = localStorage.getItem('@rocketmovies:user');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
