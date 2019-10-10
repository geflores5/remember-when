import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import getVisibleTimelines from '../../selectors/getVisibleTimelines';
import Timeline from './Timeline';

const TimelineList = (props) => (
  <div>
    <h1>Timelines</h1>
    <div class="divider"></div>
    {
      props.timelines && props.timelines.map(timeline => {
        if (props.auth.uid === timeline.userID) {
          return (
            <div>
              <Timeline key={timeline.id} {...timeline} />
              <div className="divider"></div>
            </div>
          )
        } else
          return 
        }
      )
    }
  </div>
);

const mapStateToProps = state => ({
  timelines: getVisibleTimelines(state.firestore.ordered.timelines, state.timelineFilters),
  auth: state.firebase.auth
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'timelines' }
  ])
)(TimelineList);
