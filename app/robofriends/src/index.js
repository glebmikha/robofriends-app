import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers.js';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,
  logger));

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
