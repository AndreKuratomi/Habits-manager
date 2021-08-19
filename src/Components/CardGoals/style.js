import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  margin: 20px;
  border: 1px solid var(--black);
  background: var(--white);
  color: var(--black);
  box-shadow: 8px 8px 0 -1px var(--black);

  > header {
    padding: 15px;
    background-color: var(--black);
    color: var(--orange);
    text-align: center;
    margin-bottom: 10px;
    > h1 {
      font-size: 1.2rem;
    }
  }

  > p {
    margin-left: 20px;
    border-left: 3px solid var(--orange);
    padding-left: 5px;
    &:nth-child(3) {
      margin: 10px 0;
      margin-left: 20px;
    }
  }

  > .buttons {
    margin: 10px auto;
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    > button {
      width: 40px;
      height: 40px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      > svg {
        font-size: 2rem;
      }
    }
  }
`;
