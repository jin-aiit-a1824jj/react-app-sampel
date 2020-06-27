import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import thunk from 'redux-thunk';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import EventsNew from './components/events_new';

import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/events/new" component={EventsNew}/>
          <Route exact path="/" component={EventsIndex}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
