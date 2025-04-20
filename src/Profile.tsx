import './Profile.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';




const Profile =()=> {
    // Step 2: Tell useState that you're working with ProfileDisplay[]
    const [datas, setData] = useState({
      user_ID: 0,
      first_Name: "",
      last_Name: "",
      email: "",
      password: "",
      userName: ""
  
    });
    const navigate = useNavigate();
    const location = useLocation();
    const userID = location.pathname.split("/")[2];

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const res = await axios.get(`http://localhost:8081/User`);
          const allUsers = res.data;
  
          const thisUser = allUsers.find((user: any) => user.user_ID === parseInt(userID));
          if (thisUser) {
            setData({
              user_ID: thisUser.user_ID,
              first_Name: thisUser.first_Name,
              last_Name: thisUser.last_Name,
              email: thisUser.email,
              password: thisUser.password,
              userName: thisUser.userName
            });
          }
        } catch (err) {
          console.log("Failed to fetch User:", err);
        }
      };
  
      fetchUser();
    }, [userID]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:8081/User/${userID}`, {
          email: datas.email,
          password: datas.password
        });
        window.location.reload()
      } catch (err) {
        console.log("Failed to update user:", err);
      }
    };
  
    
    
    
    return (
    <>

      <div className='Navigation'>
        
        <button disabled>Profile</button>
        <button onClick={() => navigate("/workout")}>Workout</button>
        <button onClick={() => navigate("/friend")}>Friends</button>
        <button onClick={() => navigate("/message")}>Messages</button>

      </div>

      <button className='LogoutProfile' onClick={() => navigate("/")}>Logout</button>

      <div>

        <form>
        <div className='FirstName'>
            <label htmlFor='FirstName'> First Name </label>
            <input  value={datas.first_Name}  type='text' placeholder='FirstNameStoredDB' disabled id='FirstName' name='FirstName' required />
          </div>

          <div className='LastName'>
            <label htmlFor='LastName'> Last Name </label>
            <input  value={datas.last_Name} type='text' placeholder='LastNameStoredDB' disabled id='LastName' name='LastName' required />
          </div>

          <div className='Username'>
            <label htmlFor='Username'> Username </label>
            <input value={datas.userName} type='text' placeholder='UsernameStoredDB' disabled id='Username' name='Username' required />
          </div>

          <div className='UserID'>
            <label htmlFor='UserID'> UserID </label>
            <input  value={datas.user_ID} type='number' disabled placeholder='UserIDStoredDB' id='UserID' name='UserID'/>
          </div>

          <div className='Email'>
            <label htmlFor='Email'> Email </label>
            <input onChange={handleChange} value={datas.email} type='email' placeholder='EmailStoredDB' id='Email' name='email' />
            </div>


          <div className='Password'>
            <label htmlFor='Password'> Password </label>
            <input onChange={handleChange} value={datas.password} type='password' placeholder='Change Password?' id='Password' name='password' />
            </div>
        </form>

      </div>

      <button  onClick={handleClick} className='Save'>Save</button>

    </>
    )
  }
  

  export default Profile;