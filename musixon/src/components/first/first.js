
import React from 'react'
import './first.css';

import { useNavigate } from "react-router-dom";


export const First = () => {
  
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/login'; 
      navigate(path);
    }

    const registe =() =>{
      let path= '/register';
      navigate(path);
    }
      return (
   
<div className='first-page'>

    <div className= "backgrounding">
        {/* <h1>
            first screen
        </h1> */}
        <button id='login-button'  onClick={routeChange}>Login</button>
        <button id= 'signup-button' on onClick={registe}> signup</button>
      
    </div>

   
</div>
  )
}



export default First