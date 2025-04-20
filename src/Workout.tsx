import ProfileButton from './profileButton';
import './Workout.css';
import { useNavigate } from 'react-router-dom';


export default function Workout(){
    
    const navigate = useNavigate();
    
    return (
    <>

      <div className='Navigation'>

        {/* <button onClick={() => navigate("/profile")}>Profile</button> */}
        <ProfileButton></ProfileButton>
        <button disabled>Workout</button>
        <button onClick={() => navigate("/friend")}>Friends</button>
        <button onClick={() => navigate("/message")}>Messages</button>

      </div>

      <button className='LogoutProfile' onClick={() => navigate("/")}>Logout</button>

      <div className='CurrentPlan'>
        <h1>Current Plan</h1>
        Display Workout Plan
      </div>

      <div className='Workout Today'>
        <h1>Current Plan</h1>
        Display Workout Plan
      </div>


    </>
    )
  }