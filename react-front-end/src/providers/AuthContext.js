import { createContext, useState } from 'react';

export const authContext = createContext();

// TO-DO: remove default user details when login route completed

export const AuthProvider = props => {
  const [auth, setAuth] = useState(true); // set back to false
  const [user, setUser] = useState({
    id: 1,
    first_name: 'Test',
    last_name: 'McTester',
    email: 'tester@yetanotheremail.com',
    avatar: 'https://robohash.org/isterepellendusbeatae.png?size=50x50&set=set1'
  }); // set back to null after debugging

  // save user details to state
  const login = (email, password) => {
    if (!email || !password) {
      return false;
    }

    // TODO: authentication here

    const id = 1; // set an ID to be returned from the DB
    const first_name = "Test";
    const last_name = "User";
    const avatar = "http://FAKE";

    setAuth(true);
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