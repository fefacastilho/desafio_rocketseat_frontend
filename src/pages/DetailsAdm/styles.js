import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

`;

export const Banner = styled.form`
    position: absolute;
    width: 1120px;
    height: 260px;
    background-color: $${({ theme }) => theme.COLORS.GRADIENTS_200};
    margin-top: 200px;
    margin-left: 120px;
`;

