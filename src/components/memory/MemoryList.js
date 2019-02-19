import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import getVisibleMemories from '../../selectors/getVisibleMemories';
import Memory from './Memory';
import { firestoreConnect } from 'react-redux-firebase';

const MemoryList = (props) => (
  <div>
    <h1>Memories</h1>
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
  memories: state.firestore.ordered.memories
});

// const mapStateToProps = state => ({
//   memories: getVisibleMemories(state.memories, state.memoryFilters),
// });

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'memories' }
  ])
)(MemoryList);