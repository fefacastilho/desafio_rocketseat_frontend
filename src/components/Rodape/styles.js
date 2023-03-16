import styled from "styled-components";

export const Container = styled.header`
    //grid-area: ooter;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

    background-color:  ${({ theme }) => theme.COLORS.DARK_600};
`;