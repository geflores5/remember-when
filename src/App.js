import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './config/configureStore';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

