import styled from "styled-components";

export const PageLoginContainer = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    img {
      display: block;
      width: 350px;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      width: 450px;
    }
  }
  @media screen and (min-width: 1300px) {
    img {
      width: 550px;
    }
  }
`;
