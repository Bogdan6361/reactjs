import React, { Component } from 'react';
import UserItem from '../../components/UserItem';
const UserList = (props) => {
    const {users, setUsers} = props;
    const mapUser = (user, index) => {
    const selectUsersHandler = () => {
        const newUsers = [...users];
        newUsers[index].isSelected = !newUsers[index].isSelected;
        setUsers(newUsers);
    };
    return(
            <UserItem key={user.id} user={user} onSelectUsers={selectUsersHandler} isSelected={user.isSelected} />
    );
    };
    return <ul> {users.map(mapUser)} </ul>
  };

export default UserList;
