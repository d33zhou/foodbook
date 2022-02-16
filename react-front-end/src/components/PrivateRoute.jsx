import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../providers/AuthContext"

function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={
        ({location}) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;