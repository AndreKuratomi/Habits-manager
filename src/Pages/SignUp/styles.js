import styled from "styled-components";
import registerImage from "../../Assets/register.svg";

export const Container = styled.main`
  min-height: calc(100vh - 70px);
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Backgorund = styled.figure`
  @media screen and (min-width: 768px) {
    flex: 1;
    background: url(${registerImage}) no-repeat right;
    background-size: contain;
  }
`;
