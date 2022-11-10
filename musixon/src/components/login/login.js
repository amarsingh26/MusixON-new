import React  , {useState} from 'react'
import '../registration/register.css'
import '../login/login.css'
import Sigpic from '../registration/img/signup.jpg';
import { NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import logpic from '../login/img/login.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');



const loginData = async (e)=>{
  e.preventDefault();
  

  const response = await fetch("/login" , {
      method : "POST",
      headers:{
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
          email,password
      })
  });

 const data = response.json();
 
 
 if(response.status === 421 || !data){
  window.alert("Invalid Request");
  console.log("Invalid Request");
 }
 else{
  window.alert("Successfully loged in");
  console.log("Successfully loged in");
  navigate("/library");
 }
}
  return (
    <> <section className='signin'>
     <div className='main-container'>
        {/* <div className='signup-content'>
        <div className='loginpic-container'>
            <img src = {Sigpic} alt = "signup image"></img>
            
          </div>  */}
            <div className='signin-form'>
                 
                <div className='signin-pic'>
                    <img src = {logpic} alt = " "/>;

                </div>
                <form method = "POST" className='login-form' id='login-form'>
                    {/* <h2 className='signin-title'> Sign In</h2> */}
                    <div className='login-input'>
                    <div className='login-input-field'>
                        <label htmlFor="email">
                            <i className='zmdi zmdi-email material-icons-name'></i>
                        </label>
                        <input  type="email" name="email" id="email" autoComplete="off"
                        value = {email}
                        onChange = { (e) => setEmail(e.target.value)}
                         placeholder="your email" />

                     </div>
                     <div className='login-input-field'>
                        <label htmlFor="password">
                            <i className='zmdi zmdi-lock material-icons-name'></i>
                        </label>
                        <input  type="password" name="password" id="password" autoComplete="off"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        placeholder="your password" />

                     </div>
                    </div>
                     
                     <div className='login-button'>
                        <input type= "submit" name = "signin" id = "signin" className='btn' value="Sign In"
                        onClick={loginData} />
                        <div className='register-link'>
                        <NavLink to = "/register" className= "signin-link"> Create an account </NavLink>
                        </div>
                        
                     </div>
                </form>
            </div>
           
{/* 
        </div>*/}
    </div> 
</section>

      
    </>
  )
}

export default Login


// import './login.css';
// import profile from './img/login.jpg';
// import { NavLink } from 'react-router-dom';
// // import email from './img/email.jpg';

// function login() {
//     return (
//         <div className='main-login'>
//             <div className='sub-login'>
//                 <div>
//                     <div className="imgs">
//                          <img src={profile} alt="profile" className="profile" />
//                     </div>

//                     <div>
//                         {/* <h1 id='hlogin'>Sign In</h1> */}
//                         <div>
                           
//                             <input type="text" placeholder="user name" className="user" />
//                         </div>
//                         <div className="input2">
                           
//                             <input type="password" placeholder="pass word" className="user" />
//                         </div>
//                         <div className="login-button">
//                             <button>SignIn</button>
//                         </div>

//                         <div className="link">
//                             <NavLink to = "/register" className= "signup-link">Not Registered?</NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default login;
// import React from 'react'

// const login = () => {
//   return (
//     <div>
//       I am Anshika
//     </div>
//   )
// }

// export default login