import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers,compose } from 'redux'
import App from './App'
import todos from './reducers/todos.reducer';
import thunk from 'redux-thunk';
import todoForm from './reducers/todoform.reducer';

const combine = combineReducers({
  theTodos:todos,
  theForm:todoForm
});

// const store = createStore(
//                 combine,
//                 applyMiddleware(thunk)
//                 );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combine, composeEnhancers(
  applyMiddleware(thunk)
));                

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)