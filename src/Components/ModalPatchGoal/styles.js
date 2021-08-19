import styled from "styled-components";

export const Container = styled.article`
  background: var(--white);
  width: 300px;
  height: 300px;

  > header {
    height: 50px;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    > h1 {
      font-size: 1.1rem;
      font-weight: normal;
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
      border: 0;
      width: 200px;
      color: var(--orange);
      font-weight: normal;
    }

    > select {
      padding-left: 15px;
      width: 150px;
      height: 25px;
      border: 2px solid var(--orange);
      border-radius: 10px;
      background-color: var(--white);
      color: var(--black);

      option {
        width: 150px;
      }
    }

    > button {
      width: 150px;
      margin-top: 20px;
      height: 35px;
      font-size: 1rem;
    }
  }
`;
