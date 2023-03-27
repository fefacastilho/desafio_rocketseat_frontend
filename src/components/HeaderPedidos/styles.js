import styled from "styled-components";
import { ButtonRed } from "../ButtonRed";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-around;

    padding: 0 80px;

    background-color:  ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 24px;
    }
`;

export const Logo = styled.div`

    width: 15%;
    height: 28px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
   
    margin-top: 37px;
    > svg {
            color: ${({ theme }) => theme.COLORS.CAKE_100};
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

         > h2 {
            color: ${({theme}) => theme.COLORS.CAKE_200};
            font-size: 10px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
         }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    gap: 14px;
    height: 35px;
    margin-top: 28px;

    width: 40%;
    height: 48px;
`;

export const Button = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;

    width: 216px;
    height: 48px;

    margin-top: 18px ;
    margin-left:  24px;
    
`;