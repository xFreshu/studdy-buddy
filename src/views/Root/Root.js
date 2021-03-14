import React, {useState} from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../../assets/GlobalStyle';
import {theme} from '../../assets/Theme';
import {Wrapper} from './Root.styled';
import Form from 'components/organisms/Form/Form';
import {users as usersData} from '../../data/data';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import styled from "styled-components"

const activeClassName = 'nav-item-active'

const NavContainer = styled.div`
position: absolute;
display: flex;
top: 0;
left: 0;
border-right: 1px solid #DFE2E8;
height: 100vh;
width: 120px;
`
const Navigation = styled.ul`
margin-top: 90px;

`
const StyledLink = styled(NavLink).attrs({activeClassName})`
display: inline-block;
margin: 20px 0px;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 112.7%;
/* or 14px */
text-align: right;
letter-spacing: -0.02em;
text-decoration: none;
color: #737C8E;
width: 100%;
transition: .5s;
&.${activeClassName}{
transform: translateX(20px);
}
`
const Title = styled.span`
background-color: #737C8E;;
position: absolute;
top: 20px;
color: white;
letter-spacing: 2px;
text-align: right;
padding: 10px;
`
const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const Root = () => {
    const [users, setUsers] = useState(usersData);
    const [formValues, setFormValues] = useState(initialFormState);

    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => user.name !== name);
        setUsers(filteredUsers);
    };

    const handleInputChange = (e) => {
        console.log(formValues);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        };

        setUsers([newUser, ...users]);
        setFormValues(initialFormState);
    };

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Wrapper>
                    <NavContainer>
                        <Title>Study Buddy</Title>
                        <Navigation>
                            <StyledLink exact to="/">Home</StyledLink>
                            <StyledLink to="/add-user">Add user</StyledLink>
                        </Navigation>
                    </NavContainer>
                    <Switch>
                        <Route path="/add-user">
                            <Form formValues={formValues} handleAddUser={handleAddUser}
                                  handleInputChange={handleInputChange}/>
                        </Route>
                        <Route path="/">
                            <UsersList deleteUser={deleteUser} users={users}/>
                        </Route>
                    </Switch>
                </Wrapper>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
