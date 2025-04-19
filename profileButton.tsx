import { useNavigate } from 'react-router-dom';

const ProfileButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const userID = localStorage.getItem("user_ID");

    if (userID) {
      navigate(`/profile/${userID}`);
    } else {
      console.error("No user_ID found in localStorage.");
    }
  };

  return (
    <button onClick={handleClick}>
      Go to My Profile
    </button>
  );
};

export default ProfileButton;
