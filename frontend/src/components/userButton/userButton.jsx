import { Link, useNavigate } from 'react-router-dom';
import './userButton.css'
import { useState } from 'react';
import Image from '../image/image';
import apiRequest from '../../utils/apiRequest';
import useAuthStore from '../../utils/authStore';


const UserButton = () => {
  const [ open , setOpen ] = useState(false)
  const navigate = useNavigate()

  const { currentUser, removeCurrentUser } = useAuthStore();

  console.log(currentUser)

  const handleLogout = async () => {
    try {
      await apiRequest.post('/users/auth/logout', {});
      removeCurrentUser()
      navigate("/auth")
    } catch (err) {
      console.log(err)
    }
  } 

  return currentUser ? (
    <div className="userButton">
      <Image path={currentUser.img || "/general/noAvatar.png"} alt="avatar" />
      <div onClick={() => setOpen(prev=>!prev)}>
        <Image path="/general/arrow.svg" alt="arrow" className={open ? 'arrow rew' : 'arrow'} />
      </div>
      { open && (
        <div className="userOptions">
          <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
          <div className="userOption">Setting</div>
          <div className="userOption" onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className='loginLink'>Login / SignUp</Link>
  )
}

export default UserButton