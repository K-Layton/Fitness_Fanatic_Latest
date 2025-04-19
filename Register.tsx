import './Register.css';
import { useNavigate} from 'react-router-dom';
import GuyFitness from './GuyFitness.svg';
import Smiley from './Smiley.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { setUserID } from './userSession';






const Register = () =>{
  

      const [user, setUsers] = useState({
        user_ID: 0,
        first_Name: "",
        last_Name: "",
        email: "",
        password: "",
        userName: "",
      })

      const navigate = useNavigate();

      useEffect(() => {
        const fetchAllUsers = async () => {
          try {
            const response = await axios.get("http://localhost:8081/User");
            setUsers(response.data);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchAllUsers();
      }, []);
      console.log(user)



      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUsers((prev) => ({...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:8081/User", user);
        const createdUserID = res.data.insertId;
  
        if (createdUserID) {
          localStorage.setItem("user_ID", createdUserID.user_ID); // right after registration

          // setUserID(createdUserID); // 👈 this sets the global value
          navigate(`/profile/${createdUserID}`);
        }
      } catch (err) {
        console.error("Registration error:", err);
      }
    };

    
    
      
    return (
    <>
      
      {/* <div className='Left'>
      <img src={GuyFitness} className='GuyFitness'></img>
      </div> */}

      <div className='Welcome'>Account Creation</div>


      <div>

        <form>

          <div className='FirstName'>
            <label htmlFor='FirstName'> First Name </label>
            <input type='text'  name='first_Name'  onChange={handleChange}/>
          </div>

          <div className='LastName'>
            <label htmlFor='LastName'> Last Name </label>
            <input type='text' name='last_Name'   onChange={handleChange}/>
          </div>

          <div className='Username'>
            <label htmlFor='Username'> Username </label>
            <input type='text'  name='userName'   onChange={handleChange}/>
          </div>

          <div className='Email'>
            <label htmlFor='Email'> Email </label>
            <input type='text'  name='email'   onChange={handleChange}/>
          </div>


          <div className='Password'>
          <label htmlFor='Password'> Password </label>
          <input type='text'  name='password'  onChange={handleChange}/>
          </div>

        </form>

      </div>



      <button onClick={() => navigate("/")}>Back to Login</button>
      <button onClick={handleClick}>Create Account</button>


      {/* <div className='Right'>
      <img src={Smiley} className='Smiley'></img>
      </div> */}

    </>
    )
  }

  export default Register;