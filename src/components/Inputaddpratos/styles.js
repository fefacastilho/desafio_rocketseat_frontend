import styled from "styled-components";

export const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
   

    > h2 {
        

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        color: ${({theme}) => theme.COLORS.LIGHT_400 };
        margin-bottom: 5px;
    }
    

    > input {
        height: 56px;
        width: 100%;

        border-radius: 10px;
        padding: 12px;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.LIGHT_500};
        }
    }

    > svg {
       
    }

    
`;