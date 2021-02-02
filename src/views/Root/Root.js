import React from 'react'
import UsersList from "../../components/organisms/UsersList/UsersList";
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from "./GlobalStyle";
import {theme} from "./Theme";

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({props}) => theme.colors.lightGrey};
`

const Root = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Wrapper>
            <UsersList/>
        </Wrapper>
    </ThemeProvider>
);

export default Root;
