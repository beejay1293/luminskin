import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { findCurrency } from "currency-formatter";
import { FaTimes } from 'react-icons/fa'

import { add_to_cart, remove_from_cart, remove_item } from '../redux/actions'
import LeftArrow from '../components/ChevronLeft'
import Spinner from '../components/spinner'
import SideBar from '../components/sidebar'
import fetchProductsQuery from "../queries/fetchProducts";
import Loader from '../components/spinner'
import ChevronRight from '../components/ChevronRight'
import ChevronLeft from '../components/ChevronLeft'
import Header from '../components/header'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const Products = props => {
    const [currency, setCurrency] = useState('USD')
    const [showSideBar, setShowSideBar] = useState(false)
    const { cart } = useSelector(state => state.cart)

    const dispatch = useDispatch()
    
    useEffect(() => {
      props.data.refetch({ currency: currency })
    }, [currency])

    const curr = () => {
      const currencyObj = currency ? findCurrency(currency) : { symbol: 'USD'};
      return currencyObj ? currencyObj.symbol : ''
    }

    const cartTotal = () => {
      return Object.values(cart).reduce((acc, next) => {
        acc+= next
        return acc
      }, 0)
    }

    const addItemToCart = (productId) => {
      dispatch(add_to_cart(productId))
      setShowSideBar(true)
      toast('Item added to cart!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const cartTotalCost = () => {
      return Object.entries(cart).reduce((acc, [key, value]) => {
        const product = props.data.products.find(e => e.id === parseInt(key))
        const price = product && product.price
        const totalCost = price * parseInt(value)
        acc+= totalCost
        return acc
      }, 0)
    }

    const renderProducts = () => {
      return props.data.products.map(product => (
        <div className="product-card py-3 px-2 md:px-3 w-1/2 md:w-4/12 rounded-lg hover:shadow-lg cursor-pointer focus:outline-none font-serif" key={product.id}>
          <img src={product.image_url} alt={product.title} className="block rounded-lg object-contain h-48 w-full "/>
          <p className="font-bold mt-6">{product.title}</p>
          <p className="mt-3">From {`${curr()}${product.price}`}</p>
          <button className="p-3 bg-nc-dark-green text-white mt-3" onClick={() => {addItemToCart(product.id)}}>Add to Cart</button>
        </div>
      ));
    }

    const renderCartItems = () => {
      return Object.entries(cart).map(([key, value]) => (
        <div className="bg-white p-6 flex mt-3 text-xs relative" key={key}>
          <div  className="w-4/12">
            <p>{props.data.products.find(e => e.id === parseInt(key)) && props.data.products.find(e => e.id === parseInt(key)).title}</p>
            <div className="border-2 border-nc-green flex w-2/3 mt-6 text-center shadow-xl">
              <span className="w-4/12 py-2 cursor-pointer" onClick={() => {dispatch(remove_from_cart(key))}}>-</span>
              <span className="w-4/12 py-2">{value}</span>
              <span className="w-4/12 py-2 cursor-pointer" onClick={() => {dispatch(add_to_cart(key))}}>+</span>
            </div>
          </div>
          <div className="w-4/12 text-center pt-16">
             {curr()}{props.data.products.find(e => e.id === parseInt(key)) && props.data.products.find(e => e.id === parseInt(key)).price}
          </div>
          <div className="w-4/12 text-center">
            <img src={props.data.products.find(e => e.id === parseInt(key)) && props.data.products.find(e => e.id === parseInt(key)).image_url} className="block rounded-lg object-contain h-20 w-full " />
          </div>
          <span className="absolute top-4 right-4 cursor-pointer text-nc-dark-green" onClick={() => {dispatch(remove_item(key))}}> 
                  <FaTimes />
          </span>
        </div>
      ))
    }
    

  return (
    <div className="container__home">
      <Header cartTotal={cartTotal()} setShowSideBar={setShowSideBar} />
      <section className="pt-44">       
        <div className="main">
          {props.data.loading ? <div className="sm:w-1/12 w-2/12 pt-20 mx-auto z-1"><Spinner type="Circles"/></div> :
            <div className="lumin-products">
              { renderProducts() }
            </div>         
          }
        </div>
      </section>
      <SideBar showSideBar={showSideBar} setCurrency={setCurrency} curr={curr} cartTotalCost={cartTotalCost} setShowSideBar={setShowSideBar} loading={props.data.loading} renderCartItems={renderCartItems} currency={currency} />     
      {showSideBar && (
        <div className="overlay" onClick={() => {setShowSideBar(false)}}></div>
      )}
    </div>
  );
}

export default graphql(fetchProductsQuery, {
  options: props => ({
    variables: {
      currency: 'USD'
    }
  })
})(Products);
