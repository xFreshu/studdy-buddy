import React from 'react';
import PropTypes from 'prop-types'
import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import Average from "../../atoms/Grade/Grade";
import StudentDetail from "../StudentDetail/StudentDetail";
import {Wrapper} from "./UsersListItem.styled";

const UsersListItem = ({deleteUser, userData: {average, name, attendance = '2%'}}) => (
    <Wrapper>
        <Average average={average}/>
        <StudentDetail
        name={name}
        attendance={attendance}
        />
        <DeleteButton onClick={() => deleteUser(name)}/>
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
