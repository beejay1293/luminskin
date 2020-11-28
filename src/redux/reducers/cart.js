import { ADD_TO_CART, REMOVE_FROM_CART, LOADING  } from '../constants'

const initialState = {
    cart : []
}

export default (state= initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.products
            }
        default:
            return state;
    }
}