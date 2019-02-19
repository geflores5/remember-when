import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import rootReducer from '../reducers/reducers';
import firebase from './configureFirebase';

export default () => {
  const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(firebase, { attachAuthIsReady: true }),
      reduxFirestore(firebase)
    )
  );

  return store;
}