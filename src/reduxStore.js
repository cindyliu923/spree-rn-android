import { createStore, applyMiddleware, combineReducers } from 'redux';
import accountReducer from './account/redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ account: accountReducer });
const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;