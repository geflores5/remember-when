import React from 'react';
import { connect } from 'react-redux';
import TimelineForm from '../forms/TimelineForm';
import { addTimeline } from '../../actions/timelines';
import Navbar from '../Navbar/Navbar';

const AddTimelinePage = (props) => {
  return (
    <div>
      <Navbar />
      <TimelineForm
        onSubmit={(timeline) => {
          props.addTimeline(timeline);
          props.history.push('/');
      }}
    />

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTimeline: (timeline) => dispatch(addTimeline(timeline))
  }
}

export default connect(null, mapDispatchToProps)(AddTimelinePage);