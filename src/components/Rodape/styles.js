import styled from "styled-components";

export const Container = styled.footer`
   
    border-bottom: 0;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;

    background-color:  ${({ theme }) => theme.COLORS.DARK_600};

    > h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        
    }
`;