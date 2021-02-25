import React from 'react';
import {Attendance, Name, Wrapper} from "./StudentDetail.styled";

const StudentDetail = (props) => (
    <Wrapper>
        <Name>{props.name}</Name>
        <Attendance>{props.attendance}</Attendance>
    </Wrapper>
);


export default StudentDetail
