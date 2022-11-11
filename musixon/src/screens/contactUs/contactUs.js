 import React , {useState , useEffect} from 'react'
 import NavBar from '../../components/navbar/navbar'
 import { useNavigate } from 'react-router-dom';
 require('./contactUs.css');

 const ContactUs = () => {
  const navigate = useNavigate();
 
    const[name , setName]=useState("");
    const [user , setUser] = useState({
        name :"" , phone:"" ,email:"" , message:""
    });
    let field , val;
    const handleInputs = (e)=>{
        console.log(e);
        field = e.target.name;
        val = e.target.value;
        setUser({...user , [field]:val});
    }
    const sendData = async (e)=>{
            e.preventDefault();
            const{name , phone ,email ,message} = user;

            const response = await fetch("/submitmessage" , {
                method : "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name , phone ,email ,message
                })
            });

           const data = await response.json();
           
           
           if(response.status === 422 || !data){
            window.alert("Invalid Request");
            console.log("Invalid Request");
           }
           else{
            window.alert("Successfully sent");
            console.log("Successfully sent");
            navigate('/library');
           }
    }
  const requestContact = async () =>{
    try{
        const res = await fetch('/contact' ,
        {
        method : "GET",
        headers: {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials: "include"
      });
      
      const data = await res.json();
      setName(data.name);
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
     requestContact();
  } , []);
   return (
     <div>
       <NavBar name={name}/>
       <section className='contact'>
        <h2 className='text-center'>Contact us</h2>
        <div className='form'>
            
            <input className='contact-input'  type = "text" name="name" id="name"
             value = {user.name}
             onChange = {handleInputs}
             placeholder='Your Name'
            ></input>
            <input className='contact-input' type = "text" name="phone" id="phone" 
             value = {user.phone}
             onChange = {handleInputs}
             placeholder='Your Phone'></input>
            <input className='contact-input' type = "email" name="email" id="email"
             value = {user.email}
             onChange = {handleInputs}
             placeholder='Your Email'></input>
            <textarea className='contact-input' type = "text" name="message" id="message"  cols='30'
             value = {user.message}
             onChange = {handleInputs}
             placeholder='Type your message'></textarea>
            <button type="submit" className="contact-btn" onClick={sendData}>Submit</button>
        </div>
       </section>  
     </div>
   )
 }
 
 export default ContactUs
 