import React, { Component } from 'react';
import style from './Form.module.css'
import {FormErrors} from './FormErrors';

class Form extends Component {

    //заведем с помощью конструктора локальный стайт где будем хранить сщщбщения и код ошибки при вводе данных в поле E-mail
    //Свойство formError содержит объект, который состоит из названия полей в качестве ключей и информации об ошибке 
    //в качестве значения. Первоначальное значение для каждого ключа является пустой строкой.
    //Поля emailValid и formValid которые зависят от валидации отдельного поля. По умолчанию установим значение в false 

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            country: '',
            region: '',
            formErrors: { email: '' },
            emailValid: false,
            formValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // обработчик событий для кнопки с выводом заполненных полей

    handleSubmit() {
        console.log(this.state);
        const { firstName, lastName, email, tel, country, region } = this.state;
        alert(`The form is completed and ready to be sent: 
        \nFirst Name: ${firstName} 
        \nLast Name: ${lastName} 
        \nE-mail: ${email} 
        \nTel: ${tel} 
        \nCountry: ${country} 
        \nRegion: ${region}`)
    }

    //обработчик событий для полей imput Через name получаем название поля ввода (атрибут name). И тут важно, что оно соответствует названию свойства из state, 
    //для ввода которого оно используется. Поэтому мы сможем использовать выражение [name]: value для установки свойства в state, а в качестве второго аргумента принимает 
    // обратного вызова, которая проверяет на валидность поле E-mail
    handleChange(event) {
        console.log(event.target.value)
        const { name, value } = event.target;
        this.setState(
            { [name]: value },
            () => {
                this.validateField(name, value)
            }
        )
    }

    //обработчик проверки формы E-mail на валидность Для поля электронной почты проверка осуществляется при помощи регулярного выражения.
    //Если поле не прошло проверку, то мы записываем сообщение об ошибке для данного поля и устанавливаем свойство прохождения проверки в false .
    //Затем вызываем setState для обновления formErrors и свойства прохождения проверки ( emailValid или passwordValid ). 
    //Далее отправляем функцию обратного вызова validateForm для установки значения formValid .

    validateField(imput, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        switch (imput) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Поле E-mail не удовлетворяет формату!';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState(
            { formValid: this.state.emailValid }
        );
    }

    render() {
        return (
            <form className={style.body_container} action="#" method="get">
                <div>
                    <input
                        placeholder='First Name'
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <legend>Please specify the first name</legend>
                </div>
                <div>
                    <input
                        placeholder='Last Name'
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <legend>Assistive text</legend>
                </div>
                <div>
                    <input
                        placeholder='adrian_shp@yahoo.com'
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                 <FormErrors formErrors={this.state.formErrors}/>
                </div>
                <div>
                    <input
                        placeholder='8-888-888-88-88'
                        type="tel"
                        name="tel"
                        value={this.state.tel}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        placeholder='Romania'
                        type="text"
                        name="country"
                        value={this.state.country}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        placeholder='Ramnicu Valcea'
                        type="text"
                        name="region"
                        value={this.state.region}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button className={style.button}
                        onClick={this.handleSubmit}
                        disabled={!(this.state.firstName && this.state.lastName && this.state.emailValid)}>seve settings</button>
                </div>
            </form >
        )
    }
}

export default Form;