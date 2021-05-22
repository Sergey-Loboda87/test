import React, { Component } from 'react';
import style from '../Notifications.module.css'


class Form_Mes extends Component {

    render() {
        return (
            <div className={style.item_notif}>
            <h2>Notifications</h2>
            <form action="#" method="get">
            <div>
              <input type="checkbox" value="yes" /> Email
            </div>
            <br />
            <div>
              <input type="checkbox" value="yes" /> Push notifications
              <legend>For your mobile or tablet device</legend>
            </div>
            <br />
            <div>
              <input type="checkbox" value="yes" /> Text Messages
            </div>
            <br />
            <div>
              <input  type="checkbox" value="yes" /> Phone Calls
            </div>
          </form>
          </div>
        )
    }
}

export default Form_Mes;