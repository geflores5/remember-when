import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TimelineListFilters from './timeline/TimelineListFilters';
import TimelineList from './timeline/TimelineList';

const DashboardPage = (props) => {
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/sign_in' />

  return (
    <div>
        <Navbar />
        <Link to={'/add_timeline'}>Add Timeline</Link>
        <TimelineListFilters />
        <TimelineList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(DashboardPage);