import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutNav = () => (
  <div>
    <ul className="right">
      <li><NavLink to='/sign_up'>Signup</NavLink></li>
      <li><NavLink to='/sign_in'>Login</NavLink></li>
    </ul>
  </div>
);

export default SignedOutNav;