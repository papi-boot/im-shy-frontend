import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...res }) => {
  const user = useSelector((state) => state.user.value);
  return (
    <Fragment>
      <Route
        {...res}
        render={(props) => {
          if (user.isAuthenticated) {
            return <Component />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
          }
        }}
      ></Route>
    </Fragment>
  );
};

export default ProtectedRoute;
