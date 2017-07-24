import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import Login from './containers/Login';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
