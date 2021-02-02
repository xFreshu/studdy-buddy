import styled from 'styled-components'
import {theme} from "../../../views/Root/Theme";

export const Name = styled.p`
font-size: ${({props}) => theme.fontSize.l};
font-weight: 700;
`
export const Attendance = styled.p`
font-size: ${({props}) => theme.fontSize.s};
`
export const Wrapper = styled.div`
color: ${({props}) => theme.colors.fontColor};
letter-spacing: 1px;
margin-right: 20px;
`
