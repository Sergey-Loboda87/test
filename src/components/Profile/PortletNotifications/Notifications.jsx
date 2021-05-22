import React from 'react';
import Form from './FormNotifications/Form_Notif';
import style from './Notifications.module.css'
import Form_Mes from './FormNotifications/Form_Mes'


const Notifications = () => {
  return (
    <div className={style.item_container}>
      <div className={style.item_header}>
        <div className={style.header_container}>
          <span>Notifications</span>
          Mange the notifications emailing
       </div>
      </div>
      <div className={style.item_body}>
        <Form />
        <Form_Mes />
      </div>
      <div className={style.item_footer}>
        <div className={style.buttom_container}>
          <button className={style.button}>seve</button>
        </div>
      </div>
    </div>
  );
}

export default Notifications;