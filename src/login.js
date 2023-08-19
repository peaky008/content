 
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Invalid credentials');
      }
    })
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data));
      onLogin(data.id);
    })
    .catch(error => {
      setError(error.message);
    });
  };

  return (
     
    <div className='main-container'>
    <div className='container'>
        <p  className='first-heading' 
        >Welcome back! 👋</p>
      <h2 style={{marginLeft:"20px"}}>Sign in to your account</h2>
      {error && <p>{error}</p>}
      <p style={{marginLeft:"20px"}}>Your Username</p>
      <input className='info'
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <p style={{marginLeft:"20px"}}>Password</p>
      <input className='info'
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br/>
      <button className='btn' onClick={handleLogin}  
      >Continue</button>
      <br/>
      <a href='#' className='forget'
     >Forget your password?</a>
    </div>
    <div className='outside-box'>
    <p>Don’t have an account?<span style={{color:"blue"}}>Sign up</span></p>
    </div>
      </div>
  );
}

export default Login;
