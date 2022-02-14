import { createContext, useState } from 'react';

export const authContext = createContext();

export const AuthProvider = props => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // save user details to state
  const login = (email, password) => {
    setAuth(true); // to do some authentication
    const id = "1234"; // set an ID to be returned from the DB
    setUser({ id, first_name, last_name, email, avatar });
  };

  // remove all saved state
  const logout = () => {
    setAuth(false);
    setUser(null);
  };

  // functions to expose through authContext
  const userData = { auth, user, login, logout };

  // to wrap components to share context
  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};