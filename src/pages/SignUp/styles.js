import styled from "styled-components";

export const Container = styled.div`
    
    height: 100vh;
    display: flex;
    align-items: stretch;
    

`;

export const Form = styled.form`
    background-color:  ${({ theme }) => theme.COLORS.DARK_600};
    
    padding: 0 136px;
    border-radius: 16px;

    margin-left: 300px;
    margin-top: 100px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    >h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        gap: 50px;
        
    }

    > a {
      margin-top  : 64px;
      color:  ${({ theme }) => theme.COLORS.LIGHT_100};
      //margin-bottom: 50px;

    }
    > h2 {
            height: 16px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            margin-right: 200px;
            margin-bottom: 10px;
            margin-top: 20px;
         }
`;
export const Logo = styled.div`

    //width: 80px;
    //height: 47.5px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    margin-left: 150px;
    margin-top: 300px;
    > svg {
            color: ${({ theme }) => theme.COLORS.CAKE_100};
            font-size: 50px;
        }

        > h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 49px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
         }
`;