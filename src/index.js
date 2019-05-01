import React from 'react';
import ReactDOM from 'react-dom';
import App from "./componentes/App";
import reducers from "./reducers"
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reduxPromise from "redux-promise";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxPromise)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
