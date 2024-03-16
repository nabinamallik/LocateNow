import { useState } from 'react';
import './loginsignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/signup", { username, email, password })
      .then(result => {
        console.log(result);
        navigate('/home'); // Navigate to the '/map' route upon successful signup
      })
      .catch(err => console.log(err));
  };
  
  return (
    <div className="container">
      <div className="registration form">
        <header>Signup</header>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' required placeholder="Enter your name" onChange={(e) => setUsername(e.target.value)} />
          <input type="email" name="email" required placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name='password' required placeholder="Create your password" onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" className="button" value="Signup" />
        </form>
        <div className="signup">
          <span className="signup">Already have an account? <Link style={{ textDecoration: 'none', color: '#000' }}  to="/">Login</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
