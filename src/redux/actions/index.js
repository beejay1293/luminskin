import { SET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, ERROR, LOADING }  from '../constants';
// import { getImage } from '../../utils/getImage'
import { toast } from 'react-toastify';

export const set_products = (data) => ({
  type: SET_PRODUCTS,
  payload: data
})

export const loading = () => ({
  type: LOADING,
})

export const remove_from_cart = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data
})

export const add_to_cart = (data) => ({
  type: ADD_TO_CART,
  payload: data
})


export const fetchProducts = (date) => async dispatch => {
    dispatch(loading());
    try {
        const selectedDate = date !== null ? date : new Date().toLocaleDateString('fr-CA')
        // const response = await getImage(date)
        dispatch(set_image(response.data));
        dispatch(set_date(selectedDate))
    } catch (error) {
        dispatch(getImageFailed(error.response));
        const err = error.response ? error.response.data.msg : 'Internal Error, Please try again later'
        toast.error(err)
        return Promise.reject(error.response);
    }
};

