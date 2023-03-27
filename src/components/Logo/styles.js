import styled from "styled-components";

/*export const Container = styled.div`
    
    padding: 0 136px;
    width: 30px;
    height: 30px;
    color: ${({theme}) => theme.COLORS.CAKE_100};
    
    height: 100vh;
    display: flex;
    align-items: stretch;

   > h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        display: flex;
        justify-content: center;
        flex-direction: row;

        width: 146px;
        height: 28px;
    }

`; */


export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    width: 186px;
    height: 28px;
    display: flex;
    justify-content: center;
    
    flex-direction: row;
    gap: 10px;
    > svg {
            
            font-size: 24px;
        }

        > h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
         }
`;