import './Login.css';
import { useNavigate } from 'react-router-dom';
import GuyFitness from './GuyFitness.svg';
import Smiley from './Smiley.png';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    Username: '',
    Password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async () => {
    const usernameInput = (document.getElementById("Username") as HTMLInputElement).value;
    const passwordInput = (document.getElementById("Password") as HTMLInputElement).value;
  
    try {
      const res = await axios.get("http://localhost:8081/User");
      const users = res.data;
      const user = users.find((u: any) => u.userName === usernameInput && u.password === passwordInput);
  
      if (user) {
        localStorage.setItem("user_ID", user.user_ID);
        navigate(`/profile/${user.user_ID}`);
      } else {
        alert("Incorrect username or password.");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  
  return (
    <>
      <div className='Left'>
        <img src={GuyFitness} className='GuyFitness' alt='Fitness Illustration' />
      </div>

      <div className='Welcome'>Fitness Fanatic</div>

      <div>
        <form>
          <div className='Username'>
            <label htmlFor='Username'>Username</label>
            <input
              type='text'
              id='Username'
              name='Username'
              value={inputs.Username}
              onChange={handleChange}
              required
            />
          </div>

          <div className='Password'>
            <label htmlFor='Password'>Password</label>
            <input
              type='password'
              id='Password'
              name='Password'
              value={inputs.Password}
              onChange={handleChange}
              required
            />
          </div>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      <button onClick={() => navigate("/register")}>Create Account</button>
      <button onClick={handleLogin}>Login</button>

      <div className='Right'>
        <img src={Smiley} className='Smiley' alt='Smiley Face' />
      </div>
    </>
  );
}
