import styled from "styled-components";
import registerImage from "../../Assets/register.svg";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const Backgorund = styled.div`
    @media screen and (min-width: 800px) {
        flex: 1;
        background: url(${registerImage}) no-repeat right;
        background-size: contain;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;
