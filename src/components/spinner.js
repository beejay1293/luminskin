import React from 'react'
import Loader from 'react-loader-spinner'

const Loaders = ({size=50, color="#505948", type="Grid"}) => (
    <div>
        <Loader
        type={type}
        color={color}
        height={size}
        width={size}
        /> 
    </div>  
)

export default Loaders;
