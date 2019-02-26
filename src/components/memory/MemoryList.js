import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import getVisibleMemories from '../../selectors/getVisibleMemories';
import Memory from './Memory';

const MemoryList = (props) => (
  <div>
    {
      props.memories && props.memories.map((memory) => {
        if (props.userID === memory.userID && props.timelineID === memory.timelineID) {
          return <Memory key={memory.id} {...memory} />
        } else
          return 
        }
      )
    }
  </div>
);

const mapStateToProps = state => ({
  memories: state.firestore.ordered.memories && getVisibleMemories(state.firestore.ordered.memories, state.memoryFilters),
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'memories' }
  ])
)(MemoryList);