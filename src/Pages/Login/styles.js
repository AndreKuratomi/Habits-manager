import styled from "styled-components";

export const LoginContainer = styled.main`
  min-height: calc(100vh - 70px);
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  form {
    transform: translateY(15%);
  }
  @media screen and (min-width: 1024px) {
    align-items: center;
    form {
      transform: initial;
    }
  }
`;

export const Image = styled.figure`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex: 1;
    img {
      width: 40vw;
    }
  }
`;
