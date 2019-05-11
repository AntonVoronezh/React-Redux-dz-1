import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import WrapNavLink from './WrapNavLink';

const TopMenu = () => {
	return (
		<Menu>
			<WrapNavLink content="На главную" exact to="/" />
			<WrapNavLink content="Новости" to="/news" />
			<WrapNavLink content="Профиль" to="/profile" />
			<WrapNavLink content="Логин" to="/login" position="right" />
		</Menu>
	);
};

export default TopMenu;

TopMenu.propTypes = {
	name: PropTypes.string,
};
