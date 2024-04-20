

import React, { useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/LoginSingup.css';

function SignUp() {
  const [users, setUsers] = useLocalStorage('users', []);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!username || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulating user ID generation (replace with your logic)
    const userId = Math.floor(Math.random() * 1000);

    const newUser = { userId, username, email, password };
    setUsers([...users, newUser]);

    // Save user ID in local storage
    localStorage.setItem('loggedInUserId', userId);

    alert('Registered successfully!');
    navigate('/'); 
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text"> Sign Up </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
          <input
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
          <input
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
          </svg>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSignUp}>Sign Up</div>
        
         <div className="submit" ><Link to="/login">Login</Link></div>
      </div>
    </div>
  );
}

export default SignUp;


