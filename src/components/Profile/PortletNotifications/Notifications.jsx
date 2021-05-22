import React from 'react';
import Form from './FormNotifications/FormNotif';
import style from './Notifications.module.css'
import FormMes from './FormNotifications/FormMes'


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
        <FormMes />
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