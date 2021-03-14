import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const activeClassName = 'nav-item-active'

export const NavContainer = styled.div`
position: absolute;
display: flex;
top: 0;
left: 0;
border-right: 1px solid #DFE2E8;
height: 100vh;
width: 120px;
`
export const Navigation = styled.ul`
margin-top: 90px;

`
export const StyledLink = styled(NavLink).attrs({activeClassName})`
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
export const Title = styled.span`
background-color: #737C8E;;
position: absolute;
top: 20px;
color: white;
letter-spacing: 2px;
text-align: right;
padding: 10px;
`
