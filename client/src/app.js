import React from 'react';
import { connect } from 'react-redux';
import User from './components/UserComponent';


//load components

const App = ({ user }) => (
  <div>
  	<User />
  </div>
);

const mapState = (state) => ({
  user: state.userReducer.user
});

export default connect(mapState)(App);
