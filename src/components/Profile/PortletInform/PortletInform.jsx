import React from 'react';
import style from './PortletInform.module.css'
import ava from '../../img/2.jpg'


const PortletInform = () => {
  return (
    <div className={style.item_container}>
      <div className={style.inform}>
        <div className={style.informItems}>
        <div className={style.personName}>
          Adrian Stefan
        </div>
        <div className={style.geolocation}>
          Rm. Valcea, Romania <wbr />
          4:32PM (GMT-4)
        </div>
        </div>
        <div className={style.avatar}>
          <img src={ava} alt="" />
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footerItems}>
          <button>UPLOAD PICTURE</button>
          <button disabled>REMOVE PICTURE</button>
        </div>
      </div>
    </div>
  );
}

export default PortletInform;