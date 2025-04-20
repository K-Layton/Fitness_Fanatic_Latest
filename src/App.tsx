import './App.css';
import Login from  './Login';
import Register from './Register';
import Profile from './Profile';
import Message from  './Message';
import Workout from './Workout';
import Friend from './Friend';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (<>
    
  <BrowserRouter>
  
    <Routes>

      
      <Route path="/" element={<Login />} />
        
        
        <Route path="/register" element={<Register />} />
        

        <Route path="/profile/:userID" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/friend" element={<Friend />} />

    </Routes>
  
  </BrowserRouter>
    
  
  
  </>)
}
