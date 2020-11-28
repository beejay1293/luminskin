import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

import { set_products, add_to_cart, remove_from_cart, loading } from '../redux/actions'
import Loader from '../components/spinner'
import ChevronRight from '../components/ChevronRight'
import ChevronLeft from '../components/ChevronLeft'
import Header from '../components/header'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader




function Products () {

    const { products } = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
    }, [])
    

    const clickHandler = async (action) => {
      let date = new Date(selectedDate)
     
      if(action === 'prev') {
        date.setDate(date.getDate() - 1);
      } else {
        date.setDate(date.getDate() + 1);
      }
      await getImage(date) 
    };

    const renderArrowPrev = (onClickHandler, hasPrev, label) => 
      hasPrev && (
        <button type="button" className="preview__slide-button left" onClick={() => onClickHandler('prev')} title={label} >
          <ChevronLeft />
        </button>
      )

    const renderArrowNext = (onClickHandler, hasNext, label) =>
      hasNext && (
        <button type="button" className="preview__slide-button right" onClick={() => onClickHandler('next')} title={label}  >
          <ChevronRight />
        </button>
      )

    const customRenderThumb = (children) =>
      children.map((item, key) => {
        return <img src={item} key={key} alt=""/>;
      }); 

  return (
    <div className="container__home">
      <Header />
      <hr />
      <section>
        <div className="main__header p-12">
           <h1>All Products</h1>
        </div>
        <div className="main">

        </div>
      </section>
      
    </div>
  );
}

export default Products;
