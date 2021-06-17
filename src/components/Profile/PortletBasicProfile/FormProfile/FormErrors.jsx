import React from 'react';
import style from './Form.module.css'

//Это простой функциональный компонент, который принимает объект formError 
//и возвращает пустую строку при валидации или выводит ошибку.

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((imput, i) => {
      if(formErrors[imput].length > 0){
        return (
            <div className={style.contain_error} key={i}>
              {formErrors[imput]}
            </div> 
        )        
      } else {
        return '';
      }
    })}
  </div>