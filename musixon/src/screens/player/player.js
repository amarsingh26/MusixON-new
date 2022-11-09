import React from 'react'
import Navbar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function Player() {
  const navigate = useNavigate();
  const requestPlayer = async () =>{
    try{
        const res = await fetch('/player' ,
        {
        method : "GET",
        headers: {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials: "include"
      });
      
      const data = await res.json();
      console.log(data);
      console.log("data here");
      if(res.status === 401 || !data){
        const error = new Error(res.error);
        throw error;
      }
      
    }
    catch(err){
      console.log(err);
      navigate('/er404');
      
    }
  }
  useEffect(() => {
     requestPlayer();
  } , []);
  return (

    <div>
      <Navbar />
      Player</div>
  )
}
