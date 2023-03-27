import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) =>  theme.COLORS.DARK_400};
        
        border: none;


    > a {
        color: ${({theme}) => theme.COLORS.LIGHT_300} ;
        margin-left: 0;
        display: flex; 
        align-items: center;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;   
    };
    > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_300} ;
        height: 22px;
    }

`;