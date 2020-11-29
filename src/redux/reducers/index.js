import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cart from './cart';

const appReducer = combineReducers({
  router: routerReducer,
  cart
});


export default (state, action) => appReducer(state, action);
