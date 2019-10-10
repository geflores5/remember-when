import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import MemoryList from '../memory/MemoryList';
import MemoryListFilters from '../memory/MemoryListFilters';

const ViewTimelinePage = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/sign_in' />

  return (
    <div className="container">
      <div className="row">
        <h1>
          {props.location.title}
          <small> - {props.location.description}</small>
        </h1>
      </div>
      <MemoryListFilters />
      <div className="row">
        <h3>
          Memories
          <small> 
            <Link to={{
              pathname: "/add_memory",
              id: props.location.id
            }}> + Add Memory
            </Link>
          </small>
          <div className="divider"></div>
        </h3>
      </div>
      <MemoryList userID={props.auth.uid} timelineID={props.location.id}/>
      
      <Link to={`/edit_timeline/${props.location.id}`} className="btn blue darken-1">Edit Timeline</Link>
      
    </div>
  )
  
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ViewTimelinePage);
