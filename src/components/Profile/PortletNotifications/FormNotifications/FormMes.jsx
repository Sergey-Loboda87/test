import React, { Component } from 'react';
import style from '../Notifications.module.css'


class Form extends Component {

    render() {
        return (
            <div className={style.item_messages}>
          <h2>Messages</h2>
          <form action="#" method="get">
            <div>
              <input type="checkbox" value="yes" /> Email
            </div>
            <br />
            <div>
              <input type="checkbox" value="yes" /> Push notifications
            </div>
            <br />
            <div>
              <input type="checkbox" value="yes" /> Text Messages
            </div>
          </form>
        </div>
        )
    }
}

export default Form;