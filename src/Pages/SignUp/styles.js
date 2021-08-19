import styled from "styled-components";

export const RegisterContainer = styled.main`
  min-height: calc(100vh - 70px);
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Image = styled.figure`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex: 1;
    img {
      width: 43vw;
    }
  }
`;
