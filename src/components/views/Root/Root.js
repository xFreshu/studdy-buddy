import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../../../assets/styles/GlobalStyle';
import {theme} from '../../../assets/styles/Theme';
import {Wrapper} from './Root.styled';
import Form from 'components/organisms/Form/Form';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavContainer, Title, StyledLink, Navigation} from "./Navigation.styled";
import UsersProvider from "../../../providers/UsersProviders";

const Root = () => {


    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <UsersProvider>
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
                                <Form/>
                            </Route>
                            <Route path="/">
                                <UsersList/>
                            </Route>
                        </Switch>
                    </Wrapper>
                </UsersProvider>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
