import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import  BusinessCenterIcon  from '@mui/icons-material/BusinessCenter';
import  ChatIcon  from '@mui/icons-material/Chat';
import  NotificationsIcon  from '@mui/icons-material/Notifications';

function Header() {
  return (

    <div className='header'>
        <div className='header_left'>
            <img src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png" alt="" />

            <div className='header_search'>
                <SearchIcon />
                <input type="text" alt="" />
            </div>
        </div>

        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messages'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar='https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' title='me'/>
        </div>
    </div>

  )
}

export default Header