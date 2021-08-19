import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;

  a, button {
    margin-right: 10px;
  }

  > button {
    width: 70px;
  }
`;

export const Logo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--light-green);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--black);
    font-size: 32px;
  }
`;