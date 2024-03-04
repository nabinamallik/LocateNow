import './loginsignup.css'
import { useState } from 'react';

function Signup({ register }) { // Changed prop name to 'register'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerClick = () => {
    // Capture form data
    const data = {
      username: username,
      email: email,
      password: password
    };
    // Call register function with form data
    register(data); // Changed from 'onSignup' to 'register'
  };

  return (
    <div className="container">
      <div className="registration form">
        <header>Signup</header>
        <form action="#">
          <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Enter your name"/>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email"/>
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Create your password"/>
          <input type="button" onClick={registerClick} className="button" value="Signup"/>
        </form>
        <div className="signup">
          <span className="signup">Already have an account? <a href='#'>Login</a></span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
