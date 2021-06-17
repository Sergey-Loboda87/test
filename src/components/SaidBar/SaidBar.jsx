import React from 'react'
import style from './SaidBar.module.css'
import ava from '../img/1.jpg'


const SaidBar = () => {
  return (
    <div className={style.saidBar}>
      <figure className={style.avatar}>
        <img src={ava} alt="avatar foto" />
        <p className={style.initials}>Roman Kutepov</p>
        <p className={style.position}>Brain Director</p>
      </figure>
      <br />
      <div className={style.navMenu}>
        <ul className={style.menu_items}>
          <li>Dashboard</li>
          <br />
          <li>Users</li>
          <br />
          <li>Products</li>
          <br />
          <li>Authentication</li>
          <br />
          <li>Typography</li>
          <br />
          <li>Icons & Images</li>
        </ul>
      </div>
      <div className={style.supportMenu}>
        <span>Support</span>
        <ul>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}

export default SaidBar;