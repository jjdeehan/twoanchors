import { loginUser } from '../reducers/user';
import { connect } from 'react-redux';
import User from '../components/UserComponent'


const mapDispatch = (dispatch) => ({
  login: (email, password) => dispatch(loginUser(email, password))
});

export default connect(null, mapDispatch)(Login);
