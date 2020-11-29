import { ADD_TO_CART, REMOVE_FROM_CART, ERROR, REMOVE_ITEM }  from '../constants';

export const remove_from_cart = (id) => ({
  type: REMOVE_FROM_CART,
  id
})

export const add_to_cart = (id) => ({
  type: ADD_TO_CART,
  id
})

export const remove_item = (id) => ({
  type: REMOVE_ITEM,
  id
})
