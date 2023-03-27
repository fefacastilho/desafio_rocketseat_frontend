import styled from "styled-components";

export const Container = styled.button`
    
    
    background-color: ${({ theme}) => theme.COLORS.TOMATO_400};
    color: ${({ theme}) => theme.COLORS.LIGHT_100};

    
    font-size: 12px;
    padding: 14px 24px;
    margin-top: 16px;
    border-radius: 8px;
    font-weight: 500;
    margin-left: 20px;

    float: right;

    &:disabled {
        opacity: 0.5;
        cursor: pointer;
    }

`;