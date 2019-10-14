import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';

const ViewMemoryPage = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/sign_in' />
  
  return (
    <div className="container">
      <Link to={{
      pathname: `/view_timeline/${props.location.timelineID}`,
      title: props.location.timelineID.title,
      description: props.location.timelineID.description,
      id: props.location.timelineID
    }}>Go Back</Link>
      <h2>{props.location.title}</h2>
      <img src={props.location.imageUrl} height="300" width="400"/>
      <div className="row">
        <p className="left">
          {props.location.location} - {moment(props.location.date).format('MMMM Do YYYY').toString()}
        </p>
      </div>
      <h5>{props.location.description}</h5>
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