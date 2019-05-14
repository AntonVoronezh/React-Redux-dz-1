import { connect } from 'react-redux';
import Login from '../../components/pages/Login';
import {
	usernameTextAC,
	passwordTextAC,
	usernameBackspaceAC,
	passwordBackspaceAC,
} from '../../store/actions/loginFormActions';

import { tryLoginAC } from '../../store/actions/loginActions';

const mapStateToProps = state => {
	return {
		...state.loginForm,
		...state.login,
	};
};



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
