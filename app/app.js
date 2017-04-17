import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise";
import loggerMiddleware from "redux-logger";
import diffLoggerMiddleware from "redux-diff-logger";

import Routes from "./router";
import reducers from "./reducers";

import "./styles/index.scss";

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  loggerMiddleware(),
  //diffLoggerMiddleware,
  routerMiddleware(browserHistory)
)(createStore);

const store = createStoreWithMiddleware(reducers, { session: initialState });
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ Routes } />
  </Provider>,
  document.getElementById("content")
);
