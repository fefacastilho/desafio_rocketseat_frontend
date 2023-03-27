import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    
`;

export const Form =  styled.form`
    
    padding: 50px 125px 150px 125px;
  
    
    width: 100%;
    left: 123px;
    top: 194px;

    
   background-color: ${({ theme }) =>  theme.COLORS.DARK_400};
    
   
    > h1 {
       
        height: 45px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        display: flex;
        align-items: flex-start;
        margin-top: 24px;
        color: #E1E1E6;
    }

    > h2 {
        height: 16px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        color: ${({theme}) => theme.COLORS.LIGHT_400 };
        margin-bottom: 10px;
        margin-top: 10px;
        
    }
    `;

export const Linhaaddpratos =  styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 15px;

`;



 

