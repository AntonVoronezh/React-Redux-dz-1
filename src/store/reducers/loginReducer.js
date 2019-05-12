import { login } from '../../helpers/login/login';
import { setInStorage, getInStorage } from '../../helpers/localStorage/localStorage';

import { TRY_LOGIN, LOGOUT } from '../actions/loginActions';

const initialState = {
	isLogged: getInStorage('isLogged') || false,
};

export default (state = initialState, action) => {
	switch (action.type) {




		default:
			return state;
	}
};
