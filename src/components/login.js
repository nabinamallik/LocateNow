
import './loginsignup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Map from "./map";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/login", {email, password})
    .then(result =>{console.log(result)
      if(result.data === "Success"){
        navigate(<Map/>);
      } else{
        alert(result.data)
      }
    })
    .catch(err => {console.log(err)})
  };


  return (
    <div className="container">
      <div className="login form">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <input type="text" name='email' required placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" name='password' required placeholder="Enter your password" onChange={(e)=> setPass(e.target.value)}/>
          <input type="submit"  className="button" value="Login"/>
      </form>
      <div className="signup">
        <span className="signup">Don't have an account?
         <a ><Link to='/signup'>Signup</Link></a>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Login;