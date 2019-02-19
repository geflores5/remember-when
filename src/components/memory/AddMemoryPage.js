import React from 'react';
import { connect } from 'react-redux';
import MemoryForm from '../forms/MemoryForm';
import { addMemory } from '../../actions/memories';
import Navbar from '../Navbar/Navbar';

const AddMemoryPage = (props) => (
  <div>
    <Navbar />
    <MemoryForm
      timelineID={props.location.id}
      onSubmit={(memory) => {
        props.addMemory(memory);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    addMemory: (memory) => dispatch(addMemory(memory))
  }
}

export default connect(null, mapDispatchToProps)(AddMemoryPage);