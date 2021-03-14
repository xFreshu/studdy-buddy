import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import Average from "../../atoms/Grade/Grade";
import StudentDetail from "../StudentDetail/StudentDetail";
import {Wrapper} from "./UsersListItem.styled";
import {UsersContext} from "providers/UsersProviders";

const UsersListItem = ({userData: {average, name, attendance = '2%'}}) => {
    const {deleteUser} = useContext(UsersContext)
    return (
        <Wrapper>
            <Average average={average}/>
            <StudentDetail
                name={name}
                attendance={attendance}
            />
            <DeleteButton onClick={() => deleteUser(name)}/>
        </Wrapper>
    )
};

UsersListItem.propTypes = {
    userData: PropTypes.shape({
            average: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            attendance: PropTypes.string,
        }
    ),
}

export default UsersListItem
