import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../providers/AuthContext"

function PrivateRoute({ children, ...rest }) {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={
        ({location}) =>
          token ? (
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