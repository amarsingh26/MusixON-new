import React from 'react'
import NavBar from '../../components/navbar/navbar';
import Song from '../../components/song/song'
import { useNavigate, useRouteLoaderData} from 'react-router-dom';
import { useEffect , useState} from 'react';

export default function Library() {
  const navigate = useNavigate();
  const [user , setUser] = useState("");
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
     requestLibrary();
  } , []);
  return (
    <div>
      <NavBar name={user}/>
      <Song />
    </div>
  )
}
