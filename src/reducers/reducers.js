import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import auth from './auth'
import memories from './memories';
import memoryFilters from './memoryFilters';
import timelines from './timelines';
import timelineFilters from './timelineFilters';

const rootReducer = combineReducers({
  auth,
  memories,
  memoryFilters,
  timelines,
  timelineFilters,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;