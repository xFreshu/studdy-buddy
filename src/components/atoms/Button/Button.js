import React from 'react';
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import {StyledButton} from "./Button.styled";


const Button = () => (
    <StyledButton>
        <DeleteIcon/>
    </StyledButton>
);


export default Button
