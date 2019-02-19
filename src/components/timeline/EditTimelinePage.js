import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import TimelineForm from '../forms/TimelineForm';
import { editTimeline, removeTimeline } from '../../actions/timelines';
import { removeMemory } from '../../actions/memories';
import Navbar from '../Navbar/Navbar';

const EditTimelinePage = (props) => (
  <div>
    <Navbar />
    <TimelineForm
      timeline={props.timeline}
      onSubmit={timeline => {
        props.editTimeline(props.timeline.id, timeline);
        props.history.push('/');
      }}
    />
    <button onClick={timeline => {
        props.removeTimeline(props.timeline.id);
        props.memories && props.memories.map(memory => (
          props.removeMemory(memory.id)
        ))
        props.history.push('/');
      }}
    >Remove Timeline</button>
  </div>
);


const mapStateToProps = (state, props) => {
  return {
    timeline: state.firestore.ordered.timelines.find((timeline) => timeline.id === props.match.params.id),
    memories: state.firestore.ordered.memories && state.firestore.ordered.memories.filter((memory) => memory.timelineID === props.match.params.id)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTimeline: (id, timeline) => dispatch(editTimeline(id, timeline)),
    removeTimeline: (id) => dispatch(removeTimeline(id)),
    removeMemory: (id) => dispatch(removeMemory(id))
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'timelines' }
  ])
)(EditTimelinePage);