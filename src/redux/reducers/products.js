import { SET_PRODUCTS, ERROR, LOADING  } from '../constants'

const initialState = {
    products : [],
    isLoading: false,
    error: {}
}

export default (state= initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {
                ...state,
                products: state.products,
                isLoading: false,
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: state.error
            }
        case LOADING:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }
}