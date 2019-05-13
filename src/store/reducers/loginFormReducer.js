import { USERNAME_TEXT, PASSWORD_TEXT, USERNAME_BACKSPACE, PASSWORD_BACKSPACE } from '../actions/loginFormActions';

const initialState = {
	usernameText: '',
	passwordText: '',
};

export default (state = initialState, action) => {
	switch (action.type) {



		default:
			return state;
	}
};
