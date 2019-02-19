export const addTimeline = (timeline) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('timelines').add({ ...timeline }).then(() => {
      dispatch({ type: 'ADD_TIMELINE', timeline })
    }).catch((err) => {
      dispatch({ type: 'ADD_TIMELINE_ERROR', err })
    })
  }
};

export const removeTimeline = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('timelines').doc(id).delete().then(() => {
      dispatch({ type: 'REMOVE_TIMELINE', id })
    }).catch((err) => {
      dispatch({ type: 'REMOVE_TIMELINE_ERROR', err })
    })
  }
};

export const editTimeline = (id, timeline) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('timelines').doc(id).update(timeline).then(() => {
      dispatch({ type: 'EDIT_TIMELINE', id, timeline })
    }).catch((err) => {
      dispatch({ type: 'EDIT_TIMELINE_ERROR', err })
    })
  }
};
