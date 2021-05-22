import React, { Component } from 'react';
import style from '../BasicProfile.module.css'


class Form extends Component {

    render() {
        return (
            <form className={style.body_container} action="#" method="get">
                <div>
                    <input
                        placeholder='First Name'
                        type="text"
                        name="firstName"
                       
                    />
                    <legend>Please specify the first name</legend>
                </div>
                <div>
                    <input
                        placeholder='Last Name'
                        type="text"
                        name="lastName"
                    />
                    <legend>Assistive text</legend>
                </div>
                <div>
                    <input
                        placeholder='adrian_shp@yahoo.com'
                        type="email"
                        name="email"
                    />
                </div>
                <div>
                    <input
                        placeholder='8-888-888-88-88'
                        type="tel"
                        name="tel"
                    />
                </div>
                <div>
                    <input
                        placeholder='Romania'
                        type="text"
                        name="country"
                    />
                </div>
                <div>
                    <input
                        placeholder='Ramnicu Valcea'
                        type="text"
                        name="region"
                    />
                </div>
                <div>
                    <button className={style.button}>seve settings</button>
                </div> 
            </form >
        )
    }
}

export default Form;