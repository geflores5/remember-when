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
        <div className="col s12">
          <MemoryListFilters />
        </div>
      </div>
      <h1>{props.location.title}</h1>
      <div className="row">
        <div className="col s6">
          <p>{props.location.description}</p>
        </div>
        <div className="col s6">
          <Link to={{
                pathname: "/add_memory",
                id: props.location.id
              }}> + Add Memory
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <MemoryList 
        userID={props.auth.uid}
        timelineID={props.location.id}
      />
      
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
