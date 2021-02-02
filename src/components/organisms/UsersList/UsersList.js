import React from 'react';
import { users } from "../../../data/data";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem";
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`

const List = styled.ul`
list-style: none;
`

const UsersList = () => (
    <Wrapper>
        <List>
            {users.map((userData) => (
                <UsersListItem key={userData.name} userData={userData} />
            ))}
        </List>
    </Wrapper>
);

export default UsersList
