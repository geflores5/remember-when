import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';
import { NavLink } from 'react-router-dom';

const SignedInNav = (props) => (
  <div className="right">
    <NavLink to='/sign_in' onClick={props.signOut}>Log Out</NavLink>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNav)