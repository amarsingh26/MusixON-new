import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar';
import { useEffect , useState} from 'react';
export default function Feed() {

  const navigate = useNavigate();
  const[user,setUser]=useState("");
  const requestFeed = async () =>{
    try{
        const res = await fetch('/feed' ,
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
     requestFeed();
  } , []);
  return (
    <div>
    <NavBar name={user}/>
    Feed</div>
  )
}
