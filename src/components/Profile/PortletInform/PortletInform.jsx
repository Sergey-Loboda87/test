import React from 'react';
import style from './PortletInform.module.css'
import ava from '../../img/2.jpg'


const PortletInform = () => {
  return (
    <div className={style.item_container}>
      <div className={style.inform}>
        <div>
          <img src={ava} alt="" />
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footerItems}>
        <button>UPLOAD PICTURE</button>
        <button>REMOVE PICTURE</button>
        </div>
      </div>
    </div>
  );
}

export default PortletInform;