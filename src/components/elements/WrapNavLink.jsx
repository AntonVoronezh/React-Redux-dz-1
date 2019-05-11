import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
	return (
		<Menu>
			<Menu.Item content="На главную" as={NavLink} exact to="/" activeClassName="active" />
			<Menu.Item content="Новости" as={NavLink} to="/news" activeClassName="active" />
			<Menu.Item content="Профиль" as={NavLink} to="/profile" activeClassName="active" />
			<Menu.Item content="Логин" as={NavLink} to="/login" activeClassName="active" position="right" />
		</Menu>
	);
};

export default TopMenu;

TopMenu.propTypes = {
	name: PropTypes.string,
};
