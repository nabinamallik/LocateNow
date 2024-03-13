import { useState } from 'react';
import './loginsignup.css'
import Map from './map'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Signup() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/signup", {username, email, password})
    .then(result =>{console.log(result)
      navigate(<Map/>)
    })
    .catch(err => console.log(err))
  };
  
  return (
    <div className="container">
      <div className="registration form">
        <header>Signup</header>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username'  required placeholder="Enter your name" onChange={(e)=> setUser(e.target.value)} />
          <input type="email" name="email"  required placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
          <input type="password" name='password' required placeholder="Create your password" onChange={(e)=> setPass(e.target.value)}/>
          <input type="submit" className="button" value="Signup"/>
        </form>
        <div className="signup">
          <span className="signup">Already have an account? <a href='#'><Link to="/login">Login</Link></a></span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
