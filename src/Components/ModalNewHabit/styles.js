import styled from "styled-components";

export const Container = styled.article`
  background: var(--white);
  display: flex;
  flex-direction: column;
  height: 550px;

  > header {
    height: 50px;
    width: 300px;
    background: var(--black);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    > h1 {
      font-size: 1.3rem;
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
      font-size: 1rem;
      width: 200px;
      text-align: center;
      margin: 20px 0 7px;
      color: var(--orange);
    }
    input,
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
      height: 40px;
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: auto;
    
    > header {
      width: 100%;
    }

    > form {
      h3 {
        font-size: 1.2rem;
      }

      input,
      select {
        height: 40px;
      }
    }
  }
`;
