import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import WrapNavLink from './WrapNavLink';

const TopMenu = () => {
	return (
		<Menu>
			<Menu.Item content="На главную" as={WrapNavLink} exact to="/" />
			<Menu.Item content="Новости" as={WrapNavLink} to="/news" />
			<Menu.Item content="Профиль" as={WrapNavLink} to="/profile" />
			<Menu.Item content="Логин" as={WrapNavLink} to="/login" position="right" />
		</Menu>
	);
};

export default TopMenu;

TopMenu.propTypes = {
	name: PropTypes.string,
};
