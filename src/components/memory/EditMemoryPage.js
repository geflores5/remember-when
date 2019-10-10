import React from 'react';
import { connect } from 'react-redux';
import MemoryForm from '../forms/MemoryForm';
import { editMemory, removeMemory } from '../../actions/memories';

const EditMemoryPage = (props) => (
  <div className="container">
    <MemoryForm
      memory={props.memory}
      onSubmit={memory=> {
        props.editMemory(props.memory.id, memory);
        props.history.push('/');
      }}
    />
    <button onClick={memory => {
        props.removeMemory(props.memory.id);
        props.history.push('/');
      }}
    >Remove Memory</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    memory: state.firestore.ordered.memories && state.firestore.ordered.memories.find((memory) => memory.id === props.match.params.id)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    editMemory: (id,memory) => dispatch(editMemory(id, memory)),
    removeMemory: (id) => dispatch(removeMemory(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMemoryPage);