import styled from "styled-components";

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: ${(props) => (props.modal ? "flex" : "none")};
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.article`
  background: var(--white);
  display: flex;
  flex-direction: column;
  height: 550px;
  max-height: 550px;
  transform: translateY(2vh);
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
`;
