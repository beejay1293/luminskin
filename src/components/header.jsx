import React from 'react';
import { FaOpencart } from 'react-icons/fa'

function Header () {
    
  return (
      <div className="header flex w-full p-2 px-6 space-between">        
          <div className="lumin_header_1">
             <h5 className="lumin_header">LUMIN</h5 >
             <ul className="flex ml-3">
               <li>Shop</li>
               <li className="pl-3">Learn</li>
             </ul>
          </div >
          <div className="lumin_header_2">
            <ul className="flex">
              <li>Account</li>
              <li className="pl-3"><FaOpencart className="text-2xl" /></li>
            </ul>
          </div>
      </div>
  );
}

export default Header;
