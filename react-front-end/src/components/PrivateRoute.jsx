import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../providers/AuthContext"

function PrivateRoute({ children, ...rest }) {
  const { user, token } = useAuth();
  console.log("in private route: ", user);
  console.log("in private route: ", token);

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