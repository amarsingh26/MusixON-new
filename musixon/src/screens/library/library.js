import React from 'react'
import Navbar from '../../components/navbar/navbar';
import Song from '../../components/song/song'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Library() {
  const navigate = useNavigate();
  const requestLibrary = async () =>{
    try{
        const res = await fetch('/library' ,
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
     requestLibrary();
  } , []);
  return (
    <div>
      <Navbar />
      <Song />
    </div>
  )
}
