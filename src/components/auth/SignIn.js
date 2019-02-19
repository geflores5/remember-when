import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions/auth';
import Navbar from '../Navbar/Navbar';

class SignIn extends Component {
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
    this.props.signIn(this.state);
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
          <button>Login</button>
          <div>
            { authError ? <p>{authError}</p> : null }
          </div>
        </form>
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
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);