import styled from "styled-components";



export const Grade = styled.div`
width: 34px;
height: 34px;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
}};
color: ${({ theme }) => theme.colors.white};
font-weight: 700;
border-radius: 50%;
margin-right: 20px;
display: flex;
justify-content: center;
align-items: center;
`
