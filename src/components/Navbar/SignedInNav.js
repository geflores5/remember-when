import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth';

const SignedInNav = (props) => (
  <div>
    <a onClick={props.signOut}>Log Out</a>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNav)