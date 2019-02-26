import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

const ViewMemoryPage = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/sign_in' />
  
  return (
    <div className="container">
      <Link to={`/view_timeline/${props.location.timelineID}`}>Go Back</Link>
      <h1>{props.location.title}</h1>
      <h2>{moment(props.location.date).toString()}</h2>
      <h2>{props.location.description}</h2>
      <h2>{props.location.location}</h2>
      <img src={props.location.imageUrl} height="300" width="400"/>
      
      <Link to={`/edit_memory/${props.location.id}`} className="btn blue darken-1">Edit Memory</Link>
    </div>
  )
 
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ViewMemoryPage);