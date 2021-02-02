import React from 'react';
import { Grade } from "./Grade.styled";

const Average = (props) => (
    <Grade value={props.average}>
        {props.average}
    </Grade>
);

export default Average
