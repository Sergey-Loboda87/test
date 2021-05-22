import React from 'react';
import BasicProfile from './PortletBasicProfile/BasicProfile';
import Notifications from './PortletInform/PortletInform';
import PortletInform from './PortletNotifications/Notifications';
import style from './Profile.module.css'



const Profile = () => {
  return (
    <div className={style.profile}>
      <PortletInform />
      <BasicProfile />
      <Notifications />
    </div>
  );
}

export default Profile;