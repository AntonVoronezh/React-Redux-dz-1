import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => {
	return <Route {...rest} render={props => (user ? : )} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	name: PropTypes.string,
};
