
import React , {useState} from 'react';
import './first.css';

import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export const First = () => {
  const [state] = useState({
    title :"Where Words End",
    titletwo: "Music Begins"

  });
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
    
   <div className='intro'>
      <h1 >
      <div className='title'>{state.title}</div>
      <div className='titletwo'>{state.titletwo}</div>
      </h1>
      
   </div>
   <div className='text'>
    <Typewriter
      options={{
        autoStart:true,
        loop:true,
        delay: 40,
        strings:[
          "Lorem ipsum dolor sit ametnohb loil,",
          "consectetur adipiscing elit, sed nl ",
          "deserunt mollit anim id est laborum."
        ]
      }}
    />
     
   </div>
   <div className='text2'>
    <span>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
     irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum."
    </span>
    
    
   </div>
    
    <div className= "backgrounding">
       <button id='login-button'  onClick={routeChange}>Login</button>
        <button id= 'signup-button' on onClick={registe}> signup</button>
    </div>

   
</div>
  )
}



export default First