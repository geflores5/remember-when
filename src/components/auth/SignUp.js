import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../actions/auth';
import Navbar from '../Navbar/Navbar';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div>
        <Navbar />
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            type="email"
            placeholder="Email"
            onChange={this.onEmailChange}
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.onPasswordChange}
            value={this.state.password}
          />
          <button>Sign Up</button>
        </form>
        <div>
            { authError ? <p>{authError}</p> : null }
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (userInfo) => dispatch(signUp(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);