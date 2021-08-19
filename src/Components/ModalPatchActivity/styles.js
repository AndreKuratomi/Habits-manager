import styled from "styled-components";

export const Container = styled.article`
  background: var(--white);
  width: 250px;
  height: 220px;

  > header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      font-size: 1.1rem;
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
      color: var(--orange);
    }

    > input {
      padding-left: 15px;
      width: 200px;
      height: 30px;
      border: 2px solid var(--orange);
      border-radius: 10px;
      background-color: var(--white);
      color: var(--black);
      &::placeholder {
        color: var(--black);
      }
    }

    > button {
      width: 200px;
      margin-top: 20px;
      height: 35px;
      font-size: 1rem;
    }
  }
`;
