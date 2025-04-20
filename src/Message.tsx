import './Message.css';
import { useNavigate } from 'react-router-dom';
import ProfileButton from './profileButton';


export default function Message(){
    
    const navigate = useNavigate();
    
    return (
    <>
      <div className='Navigation'>

        {/* <button onClick={() => navigate("/profile")}>Profile</button> */}
        <ProfileButton></ProfileButton>
        <button onClick={() => navigate("/workout")}>Workout</button>
        <button onClick={() => navigate("/friend")}>Friends</button>
        <button disabled>Messages</button>

      </div>
      
      <button className='LogoutProfile' onClick={() => navigate("/")}>Logout</button>

      <div className='Conversations'>
        <h1>Conversations</h1>
        Display List of all conversations beneath from DB, can click on them
      </div>

      <div className='Conversation'>
        <h1>Current Chat</h1>
        <p>Display previous messages</p>
        
        <input type='text' id='Message' name='Message'/>
        <button type='submit'>Send</button>
      </div>


    </>
    )
  }