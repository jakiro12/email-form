import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducerSlice from './Reducers/time'; // lo puedo nombrar como quiera

const store= configureStore({
   reducer:{
     primeReducer: reducerSlice
   },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


