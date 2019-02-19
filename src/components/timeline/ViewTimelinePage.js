import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import MemoryList from '../memory/MemoryList';
import Navbar from '../Navbar/Navbar';

const ViewTimelinePage = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/sign_in' />

  return (
    <div>
      <Navbar />
      <h1>{props.location.title}</h1>
      <h2>{props.location.description}</h2>
      <MemoryList userID={props.auth.uid} timelineID={props.location.id}/>
      <Link to={{
        pathname: "/add_memory",
        id: props.location.id
      }}>
        <h3>Add Memory</h3>
      </Link>
      <Link to={`/edit_timeline/${props.location.id}`}>Edit Timeline</Link>
      
    </div>
  )
  
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ViewTimelinePage);
