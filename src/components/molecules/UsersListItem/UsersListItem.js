import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from "../../atoms/Button/Button";
import Average from "../../atoms/Grade/Grade";
import StudentDetail from "../../atoms/StudentDetail/StudentDetail";

const Wrapper = styled.li`
display: flex;
align-items: center;
position: relative;
padding: 40px 0;
&:not(:last-child)::after{
content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
}
`

const UsersListItem = ({userData: {average, name, attendance = '2%'}}) => (
    <Wrapper>
        <Average average={average}/>
        <StudentDetail
        name={name}
        attendance={attendance}
        />
        <Button/>
    </Wrapper>
);

UsersListItem.propTypes = {
    userData: PropTypes.shape({
            average: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            attendance: PropTypes.string,
        }
    ),
}

export default UsersListItem
