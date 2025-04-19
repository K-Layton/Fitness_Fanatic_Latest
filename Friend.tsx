import './Friend.css';
import { useNavigate } from 'react-router-dom';
import ProfileButton from './profileButton';


export default function Friend(){
    
    const navigate = useNavigate();

    return (
    <>
      <div className='Navigation'>

      {/* <button onClick={() => navigate("/profile")}>Profile</button> */}
      <ProfileButton></ProfileButton>
      <button onClick={() => navigate("/workout")}>Workout</button>
      <button disabled>Friends</button>
      <button onClick={() => navigate("/message")}>Messages</button>

      </div>
      
      <button className='LogoutProfile' onClick={() => navigate("/")}>Logout</button>


      <div className='FriendList'>
        <h1>Friend List</h1>
        Display List of all friends beneath from DB
      </div>

      <div className='SearchFriend'>
        <h1>Find Friends!</h1>
        <input type='text' id='SearchFriend' name='SearchFriend'/>
        <button type='submit'>Search</button>
      </div>

    </>
    )
  }