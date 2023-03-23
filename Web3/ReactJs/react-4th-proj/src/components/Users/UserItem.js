import React from 'react'
import styles from './Users.module.css'
const UserItem = (props) => {
    return(<div>
        <h2>{props.name}</h2>
        <div>{props.age} years old</div>
    </div>);
};

export default UserItem;