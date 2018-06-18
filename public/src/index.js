import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAuUwcWKjo6HQFjVvE9VIvsCqt3s_aiq4E",
  authDomain: "lyricalquota.firebaseapp.com",
  databaseURL: "https://lyricalquota.firebaseio.com",
  projectId: "lyricalquota",
  storageBucket: "lyricalquota.appspot.com",
  messagingSenderId: "1016091053243"
};
firebase.initializeApp(config);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
