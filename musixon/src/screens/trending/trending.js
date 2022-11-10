import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect , useState} from 'react';
import NavBar from '../../components/navbar/navbar';
import Song from '../../components/song/songfreq';

export default function Trending() {
  const navigate = useNavigate();
  const[user , setUser]=useState("");
  const requestTrending = async () =>{
    try{
        const res = await fetch('/trending' ,
        {
        method : "GET",
        headers: {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials: "include"
      });
      
      const data = await res.json();
      setUser(data.name);
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
     requestTrending();
  } , []);
  return (
    <div>
      <NavBar name={user}/>
      <Song />

    </div>
  )}