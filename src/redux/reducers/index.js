import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products';
import cart from './cart';



const appReducer = combineReducers({
  router: routerReducer,
  products,
  cart
});


export default (state, action) => appReducer(state, action);
