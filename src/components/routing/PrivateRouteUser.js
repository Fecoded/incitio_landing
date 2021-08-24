import React from "react";
import { createStructuredSelector } from "reselect";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selector";

const PrivateRouteUser = ({
  component: Component,
  user: { isAuthenticated, token },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && token === null ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRouteUser.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(PrivateRouteUser);
