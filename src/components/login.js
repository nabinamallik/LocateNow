import './loginsignup.css';
import axios from 'axios';
import Map from './map';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); navigate(<Map/>); axios.post("/login", { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate(<Map/>); // Navigate to the '/map' route upon successful login
        } else {
          alert(result.data);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="login form">
        <header>Login</header>
        <form onSubmit={handleSubmit}>
          <input type="text" name='email' required placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name='password' required placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" className="button" value="Login" />
        </form>
        <div className="signup">
          <span className="signup">Don't have an account? <Link  style={{ textDecoration: 'none', color: '#000' }} to="/signup">Signup</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
