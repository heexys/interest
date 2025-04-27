import { Link } from 'react-router'
import Image from '../image/image'
import './leftBar.css'

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="menuIcons">
        <Link to="/" className='menuIcon'>
          <Image path="/general/logo.png" alt="logo" className='logo' />
        </Link>
        <Link to="/" className='menuIcon'>
          <Image path="/general/home.svg" alt="home" />
        </Link>
        <Link to="/create" className='menuIcon'>
          <Image path="/general/create.svg" alt="create" />
        </Link>
        <Link to="/update" className='menuIcon'>
          <Image path="/general/updates.svg" alt="update" />
        </Link>
        <Link to="/message" className='menuIcon'>
          <Image path="/general/messages.svg" alt="messages" />
        </Link>
        <Link to="/settings" className='menuIcon'>
          <Image path="/general/settings.svg" alt="settings" />
        </Link>
      </div>
    </div>
  )
}

export default LeftBar