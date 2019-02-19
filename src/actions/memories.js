export const addMemory = (memory) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('memories').add({ ...memory }).then(() => {
      dispatch({ type: 'ADD_MEMORY', memory })
    }).catch((err) => {
      dispatch({ type: 'ADD_MEMORY_ERROR', err })
    })
  }
};

export const removeMemory = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('memories').doc(id).delete().then(() => {
      dispatch({ type: 'REMOVE_MEMORY', id })
    }).catch((err) => {
      dispatch({ type: 'REMOVE_MEMORY_ERROR', err })
    })
  }
};

export const editMemory = (id, memory) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('memories').doc(id).update(memory).then(() => {
      dispatch({ type: 'EDIT_MEMORY', id, memory })
    }).catch((err) => {
      dispatch({ type: 'EDIT_MEMORY_ERROR', err })
    })
  }
};
