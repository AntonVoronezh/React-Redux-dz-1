import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const TopMenu = () => {
	return (
		<Menu>
			<Menu.Item content="На главную" />
			<Menu.Item content="Новости" />
			<Menu.Item content="Профайл" />
			<Menu.Item content="Логин" />
		</Menu>
	);
};

export default TopMenu;

TopMenu.propTypes = {
	name: PropTypes.string,
};
