import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';

const Navbar = (props) => {
  const links = props.auth.uid ? <SignedInNav /> : <SignedOutNav />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Remember When</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);