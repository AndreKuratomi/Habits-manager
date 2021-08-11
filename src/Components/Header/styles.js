import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--green);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 2rem;
  }
  div {
    margin-right: 1rem;
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    button {
      width: 70px;
      height: 40px;
    }
  }
`;
