import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
const extoken = JSON.parse(localStorage.getItem("token"));

export const PrivateRoute = ({ props: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !extoken && restricted ? (
          <Navigate to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export const PublicRoute = ({ props: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        extoken && restricted ? (
          <Navigate to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
