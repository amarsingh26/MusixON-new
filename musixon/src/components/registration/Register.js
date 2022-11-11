import React , {useState} from 'react'
import './register.css';

import Sigpic from './img/signup.jpg';
import { NavLink  } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [user , setUser] = useState({
        name :"" , email:"" , phone:"" , Gender:"" , password:"" , cpassword:""
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
            const{name , email , phone ,Gender , password , cpassword} = user;

            const response = await fetch("/register" , {
                method : "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name , email , phone ,Gender , password , cpassword
                })
            });

           const data = await response.json();
           
           
           if(response.status === 422 || !data){
            window.alert("Invalid Request");
            console.log("Invalid Request");
           }
           else{
            window.alert("Successfully Registered");
            console.log("Successfully Registered");
            navigate('/login');
           }
    }
    return (
        <>
            <section className='signup'>
                <div className='main-container'>
                    <div className='signup-content'>
                      <div className='signpic-container'>
                        <img src = {Sigpic} alt = "signup"></img>
                        <NavLink to = "/login" className= "signin-link"> Already Registered?</NavLink>
                      </div>
                        <div className='signup-form'>
                            <h2 className='title-signup'> Sign Up</h2>
                            <form method = "POST" className='register-form' id='register-form'>
                                <div className='input-field'>
                                    <label htmlFor="name">
                                        <i className='zmdi zmdi-account material-icons-name'></i>
                                    </label>
                                    <input  type="text" name="name" id="name" autoComplete="off"
                                    value = {user.name}
                                    onChange = {handleInputs}
                                     placeholder="your name" />

                                 </div>
                                 <div className='input-field'>
                                    <label htmlFor="email">
                                        <i className='zmdi zmdi-email material-icons-name'></i>
                                    </label>
                                    <input  type="email" name="email" id="email" autoComplete="off"
                                    value = {user.email}
                                    onChange = {handleInputs}
                                     placeholder="your email" />

                                 </div>
                                 <div className='input-field'>
                                    <label htmlFor="phone">
                                        <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
                                    </label>
                                    <input  type="text" name="phone" id="phone" autoComplete="off"
                                    value = {user.phone}
                                    onChange = {handleInputs}
                                     placeholder="your phone" />

                                 </div>
                                 <div className='input-field'>
                                    <label htmlFor="Gender">
                                        <i className='zmdi zmdi-female material-icons-name'></i>
                                    </label>
                                    <input  type="text" name="Gender" id="Gender" autoComplete="off"
                                    value = {user.Gender}
                                    onChange = {handleInputs}
                                     placeholder="your Gender" />

                                 </div>
                                 <div className='input-field'>
                                    <label htmlFor="password">
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input  type="password" name="password" id="password" autoComplete="off"
                                    value = {user.password}
                                    onChange = {handleInputs}
                                     placeholder="your password" />

                                 </div>
                                 <div className='input-field'>
                                    <label  htmlFor="cpassword">
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input  type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    value = {user.cpassword}
                                    onChange = {handleInputs}
                                     placeholder=" Confirm your password" />

                                 </div>
                                 <div className='register-button'>
                                    <input type= "submit" name = "signup" id = "signup" className='btn' value="Register"
                                    onClick={sendData} />
                                 </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Register