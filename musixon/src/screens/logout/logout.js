import React , {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/logout' , {
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials: "include"
        }).then((res)=>{
            
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
              }
              navigate('/');
              
        }).catch((err)=>{
            console.log(err);
        });
    });
  
  return (
    <div>
      this is logout page
    </div>
  )
}

export default Logout