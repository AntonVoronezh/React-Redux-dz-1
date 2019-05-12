import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => {
	
};

export default PrivateRoute;

PrivateRoute.propTypes = {
	name: PropTypes.string,
};
