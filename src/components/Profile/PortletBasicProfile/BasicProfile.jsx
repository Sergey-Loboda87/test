import React from 'react';
import style from './BasicProfile.module.css';
import Form from './FormProfile/Form'


const BasicProfile = () => {

  return (
    <div className={style.item_container}>
      <div className={style.item_header}>
        <div className={style.header_container}>
          <span>Basic Profile</span>
           The information can be edited from yuor profile page
       </div>
      </div>
      <div className={style.item_body}>
        <Form />
      </div>
    </div>
  );
}

export default BasicProfile;