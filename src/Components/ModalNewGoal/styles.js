import styled from "styled-components";

export const Container = styled.article`
  background: var(--white);
  > header {
    height: 50px;
    width: 280px;
    background: var(--black);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-size: 1rem;
    }
    > svg {
      cursor: pointer;
      color: var(--orange);
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
      width: 200px;
      margin: 20px 0 7px;
      color: var(--orange);
      border: 0;
    }
    > input,
    select {
      padding-left: 15px;
      width: 200px;
      height: 25px;
      border: 2px solid var(--orange);
      border-radius: 10px;
      background-color: var(--white);
      color: var(--black);
      &::placeholder {
        color: var(--black);
      }
    }

    button {
      width: 200px;
      margin: 20px 0;
      height: 35px;
      font-size: 0.9rem;
    }
  }
`;
