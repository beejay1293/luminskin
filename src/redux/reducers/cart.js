import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM } from '../constants'

const initialState = {
    cart : {}
}

export default (state= initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart[action.id] ? {...state.cart, [action.id]: state.cart[action.id] + 1 } : {...state.cart, [action.id]: 1}
            }
        case REMOVE_ITEM: 
        if(state.cart[action.id]) {
            let newCart = state.cart
            delete newCart[action.id]
            return {
                ...state,
                cart: newCart
            }
        }
        case REMOVE_FROM_CART:
            if(state.cart[action.id]) {
                if(state.cart[action.id] === 1) {
                    let newCart = state.cart
                    delete newCart[action.id]
                    return {
                        ...state,
                        cart: newCart
                    }
                }
                return {
                    ...state,
                    cart: {...state.cart, [action.id]: state.cart[action.id] - 1}
                }
            } else {
                return {
                    ...state
                }
            }
            
        default:
            return state;
    }
}