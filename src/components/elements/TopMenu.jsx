import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
	return (
		<Menu>
			<NavLink>
				<Menu.Item content="На главную" />
			</NavLink>
			<NavLink>
				<Menu.Item content="Новости" />
			</NavLink>
			<NavLink>
				<Menu.Item content="Профайл" />
			</NavLink>
			<NavLink>
				<Menu.Item content="Логин" />
			</NavLink>
		</Menu>
	);
};

export default TopMenu;

TopMenu.propTypes = {
	name: PropTypes.string,
};
