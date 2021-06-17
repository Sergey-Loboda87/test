import React from 'react';
import style from './Header.module.css'



const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
      </div>
      <div className={style.name}>
        <span>Devias Kit</span> 
      </div>
      <div className={style.inform}>
        <div className={style.free}>
          <span>FREE</span>
        </div>
        <p>See our PRO version for more design
          components & coded in React follow
          this link: https://devias.io/products/devias-kit-pro</p>
      </div>
    </div>
  );
}
export default Header;
