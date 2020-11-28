import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { add_to_cart, remove_from_cart, loading } from '../redux/actions'
import Spinner from '../components/spinner'
import fetchProductsQuery from "../queries/fetchProducts";
import Loader from '../components/spinner'
import ChevronRight from '../components/ChevronRight'
import ChevronLeft from '../components/ChevronLeft'
import Header from '../components/header'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




const Products = props => {
    const [currency, setCurrency] = useState('USD')
    const { cart } = useSelector(state => state.cart)

	  const dispatch = useDispatch()

    const curr = () => {
      switch(currency) {
        case 'USD':
          return '$'
      }
    }

    const cartTotal = () => {
      return Object.values(cart).reduce((acc, next) => {
        acc+= next
        return acc
      }, 0)
    }

    useEffect(() => {
      console.log(props);
    }, [props.data])

    const renderProducts = () => {
      return props.data.products.map(product => (
        <div className="product-card py-3 px-2 md:px-3 w-1/2 md:w-4/12 rounded-lg hover:shadow-lg cursor-pointer focus:outline-none font-serif" key={product.id}>
          <img src={product.image_url} alt={product.title} className="block rounded-lg object-contain h-48 w-full "/>
          <p className="font-bold mt-6">{product.title}</p>
          <p className="mt-3">From {`${curr()}${product.price}`}</p>
          <button className="p-3 bg-nc-dark-green text-white mt-3" onClick={() => {dispatch(add_to_cart(product.id))}}>Add to Cart</button>
        </div>
      ));
    }
    

  return (
    <div className="container__home">
      <Header cartTotal={cartTotal()} />
      <hr />
      <section>
        <div className="main__header p-12 font-serif">
           <h1>All Products</h1>
        </div>
        <div className="main">
          {props.data.loading ? <div className="sm:w-1/12 w-2/12 pt-20 mx-auto z-1"><Spinner type="Circles"/></div> :
            <div className="lumin-products">
              { renderProducts() }
            </div>         
          }
        </div>
      </section>    
    </div>
  );
}

export default graphql(fetchProductsQuery)(Products);
