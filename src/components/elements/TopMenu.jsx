import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
	return (
		<Menu>
			{/* <NavLink to="/">
				<Menu.Item content="На главную" />
			</NavLink> */}
			{/* <NavLink to="/news">
				<Menu.Item content="Новости" />
			</NavLink> */}
			{/* <NavLink to="/profile" /> */}
			{/* <Menu.Item position="right">
				<NavLink to="/login">Логин</NavLink>
			</Menu.Item> */}
			{/* <NavLink to="/login" >
				<Menu.Item content="Логин" position="right"/>
			</NavLink> */}

			<Menu.Item content="На главную" as={NavLink} to="/" activeClassName="active" />
			<Menu.Item content="Новости" as={NavLink} to="/news" activeClassName="active" />
			<Menu.Item content="Профиль" as={NavLink} to="/profile" activeClassName="active" />
			<Menu.Item content="Логин" as={NavLink} to="/login" activeClassName="active" />
		</Menu>
	);
};

export default TopMenu;

TopMenu.propTypes = {
	name: PropTypes.string,
};
