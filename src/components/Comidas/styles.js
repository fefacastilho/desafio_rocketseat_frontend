import styled from "styled-components";



export const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 15px;
    isolation: isolate;
    border-radius: 12px;

    width: 304px;
    height: 462px;

    background-color:  ${({ theme }) => theme.COLORS.DARK_300};
    
    > h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        text-align: center;
        color:  ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-top: 16px;


    };

    > h2 {
        height: 52px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 160%;

        text-align: center;

        color:  ${({ theme }) => theme.COLORS.CAKE_200}
    };

    > h3 {
        height: 22px;
        color:  ${({ theme }) => theme.COLORS.LIGHT_400};

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;

    };
    > svg {
        height: 22px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-top: 16px;
        margin-right: 16px;
    }
     `;





export const Foto = styled.div `
    display: flex;
    align-items: center;

    > img {
        width: 176px;
        height: 176px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        
    }
`;

