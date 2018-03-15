import React, {Component} from 'react';


import { loginUser } from '../public/reducers/user';

export default class User extends Component {
  render(){
    return(
      <a><button>
          Login with Google
        </button>
        <input name="username" />
      </a>
    )
  }
}

