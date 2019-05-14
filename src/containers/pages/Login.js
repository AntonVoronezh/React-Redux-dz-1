import { connect } from 'react-redux';
import Login from '../../components/pages/Login';
import {
	usernameTextAC,
	passwordTextAC,
	usernameBackspaceAC,
	passwordBackspaceAC,
} from '../../store/actions/loginFormActions';

import { tryLoginAC } from '../../store/actions/loginActions';



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
