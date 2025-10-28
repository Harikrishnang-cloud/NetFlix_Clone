import React, { useEffect ,useRef} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div ref={navRef}className='navbar'>
        <div className='navbar-left'>
            <img src={logo} alt='logo-image'/>
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by language</li>
            </ul>
        </div>
        <div className='navbar-right'>
          <img src={search_icon} alt="search_icon_image" className='icons' />
          <p>Children</p>
          <img src={bell_icon} alt="bell_icon_image" className='icons' />
          <div className="navbar-profile">
            <img src={profile_icon} alt="profile_icon_image" className='profile' />
            <img src={caret_icon} alt="caret_icon_image" />
            <div className="dropdown">
              <p onClick={()=>{logout()}}>Sign out of NetFlix</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar