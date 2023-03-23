import React from 'react'
import UserItem from './UserItem'
import style from './Users.module.css'

const Users = (props) => {

    let div;
    if(props.items.length === 0){
        return <div>'not found any element'</div>;
    }
    else{

        return (
            <div>
                {props.items.map((user) => (
                <UserItem
                    key={user.id}
                    name={user.name}
                    age={user.age}
                />
                ))}
        </div>
        );

        // div = <div>{props.items.map((user) => {
        //     <UserItem
        //         key={user.id}
        //         name={user.name}
        //         age={user.age}
        //     />
        // })}</div>
    }

};

export default Users;