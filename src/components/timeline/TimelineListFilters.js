import React from 'react';
import { connect } from 'react-redux';
import setTimelineTextFilter from '../../actions/timelineFilters';

const TimelineListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.timelineFilters.text}
      onChange={(e) => {
        props.dispatch(setTimelineTextFilter(e.target.value));
      }}
    />
  </div>
);

const matpStateToProps = (state) => {
  return {
    timelineFilters: state.timelineFilters
  }
};

export default connect(matpStateToProps)(TimelineListFilters);