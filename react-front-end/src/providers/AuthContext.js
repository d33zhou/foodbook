import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
}

export const AuthProvider = props => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  // check if token exists in local storage and set token to existing token
  useEffect(() => {
    const tokenCookie = localStorage.getItem('token');
    
    if (tokenCookie) {
      setToken(tokenCookie);
      const decoded = decode(tokenCookie);
      setUser(decoded);
      setAuth(true);
    }

    return tokenCookie;
  }, []);

  // create new user
  const register = (email, password, firstName, lastName, avatar) => {
    const registerAPI = 'http://localhost:3001/api/auth/register';

    return axios
      .post(registerAPI, {email, password, firstName, lastName, avatar})
      .then(res => res.data.user)
      .catch(err => err.message);
  };

  // save user details to state
  const login = (email, password) => {
    const loginAPI = 'http://localhost:3001/api/auth/login';
    
    return axios
      .post(loginAPI, { email, password })
      .then(res => {
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        const decoded = decode(res.data.token);
        setUser(decoded);
        setAuth(true);
        return decoded;
      })
      .catch(err => err.message);
  };

  // remove all saved state
  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    setUser(null);
  };

  // functions to expose through authContext
  const userData = { user, login, logout, register, token, auth };

  // to wrap components to share context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};