import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 250px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: red;
    margin-bottom: 10px;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid var(--black);
  color: var(--black);
  padding: 0 10px;
  height: 30px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  transition: 0.4s;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;

    svg {
      color: var(--black);
    }
  }

  svg {
    color: green;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid red;

      svg {
        color: red;
      }
    `}

  input {
    width: 100%;
    margin-left: 8px;
    background: transparent;
    color: var(--black);
    outline: none;
    border: none;

    &::placeholder {
      color: ${(props) => (props.isErrored ? "red" : "gray")};
    }
  }
`;
