import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  margin: 20px;

  border-radius: 10px;
  border: 3px solid var(--orange);
  background: var(--white);
  color: var(--black);
  box-shadow: 8px 8px 0 -1px var(--black);

  position: relative;

  > header {
    padding: 15px;
    background-color: var(--black);
    color: var(--orange);
    text-align: center;
    margin-bottom: 10px;
    border-radius: 7px 7px 0 0;

    > h1 {
      font-size: 1.2rem;
    }
  }

  .achieved {
    svg {
      width: 30px;
      height: 30px;
      background: ${(goal) =>
        goal.achieved === true
          ? "rgba(0,255,0,0.1);"
          : "rgb(224, 145, 104, 0.3);"};
      border-radius: 50%;

      position: absolute;
      right: 15px;
    }
  }

  > p {
    margin-left: 20px;
    border-left: 3px solid var(--orange);
    padding-left: 5px;
    &:nth-child(5) {
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

  @media (min-width: 1440px) {
    width: 500px;
  }
`;
