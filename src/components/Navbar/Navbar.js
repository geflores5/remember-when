import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';

const Navbar = (props) => {
  const links = props.auth.uid ? <SignedInNav /> : <SignedOutNav />
  return (
    <nav>
      <div>
        <NavLink to='/'>Remember When</NavLink>
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