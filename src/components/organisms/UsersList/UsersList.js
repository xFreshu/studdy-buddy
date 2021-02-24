import React, {useState} from 'react';
import { users as userData } from 'data/data'
import UsersListItem from "../../molecules/UsersListItem/UsersListItem";
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`

const List = styled.ul`
list-style: none;
`

const UsersList = () => {
    const [users, setUsers] = useState(userData)

    const deleteUser = (name) => {
        const filteredUsers = users.filter(user => user.name !== name)
        setUsers(filteredUsers);
    }


    return (
        <Wrapper>
            <List>
                {users.map((userData, i) => (
                    <UsersListItem deleteUser={deleteUser} index={i} key={userData.name} userData={userData}/>
                ))}
            </List>
        </Wrapper>
    );
};

export default UsersList
