import { createContext, useState } from 'react';

const authContext = createContext();

const AuthProvider = props => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const userData = { auth, user, login, logout };

  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};

export default {
  authContext,
  AuthProvider,
};