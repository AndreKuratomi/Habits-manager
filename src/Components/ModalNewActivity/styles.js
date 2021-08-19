import styled from "styled-components";

export const Container = styled.article`
  background: var(--white);
  > header {
    height: 50px;
    width: 290px;
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      width: 200px;
      margin: 20px 0 7px;
      color: var(--orange);
    }
    input {
      padding-left: 15px;
      width: 200px;
      height: 25px;
      border: 2px solid var(--orange);
      border-radius: 10px;
      background-color: var(--white);
      color: var(--black);
      margin: 20px 0;
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

  @media (min-width: 1024px) {
    width: 30%;
    height: auto;
    
    > header {
      width: 100%;

      h1 {
        font-size: 1.3rem;
      }
    }

    > form {
      h3 {
        font-size: 1.2rem;
      }

      input {
        height: 40px;
      }
    }
  }
`;
