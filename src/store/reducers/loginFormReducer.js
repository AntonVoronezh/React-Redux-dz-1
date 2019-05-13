import { USERNAME_TEXT, PASSWORD_TEXT, USERNAME_BACKSPACE, PASSWORD_BACKSPACE } from '../actions/loginFormActions';

const initialState = {
	usernameText: '',
	passwordText: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USERNAME_TEXT:
			return {
				...state,
				usernameText: action.payload !== null ? state.usernameText + action.payload : state.usernameText,
			};



		default:
			return state;
	}
};
