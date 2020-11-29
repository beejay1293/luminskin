import React from 'react';
import { useSelector } from 'react-redux';

import { currencyCodes } from '../utils/currency'
import LeftArrow from './ChevronLeft'



const SideBar = ({ showSideBar, setCurrency, children, curr, cartTotalCost, setShowSideBar, renderCartItems, loading, currency }) => {
    
  return (
    <section className={`cart_container bg-nc-green w-5/12 shadow-2xl p-6 font-serif overflow-scroll ${showSideBar ? 'slide-in' : 'slide-out'}`}>
      <div className="flex">
        <div className="w-1/3"><div className="rounded-full h-6 w-6 flex items-center justify-center border-nc-dark-green border-2" onClick={() => {setShowSideBar(false)}}><LeftArrow /></div></div>
        <div className="w-2/3 flex-start text-nc-dark-green pl-9">Your Cart</div>
      </div>
      <div className="mt-2">
        <select className="text-nc-dark-green p-1" value={currency} onChange={e => setCurrency(e.target.value)}>
          {currencyCodes.map(code => (
            <option value={code} key={code}>{code}</option>
          ))}
        </select>
      </div>
      {!loading ? 
        <div>
         {renderCartItems()}
        </div> : null 
      }
      <div className="mt-32">
        <hr className="border-1 border-nc-dark-green"/>
        <div className="flex justify-between">
          <p className="">Subtotal</p>
          {!loading && (
           <p className="">{curr()}{cartTotalCost()}</p>
          )}
        </div>
        <div className="text-center p-1 bg-white border border-2 border-nc-dark-green mt-2 text-nc-dark-green">Make this a subscription (save $20)</div>
        <div className="text-center p-1 bg-nc-dark-green mt-2 border-1 text-white">Proceed to checkout</div>
      </div>
  </ section>
  );
}

export default SideBar;
