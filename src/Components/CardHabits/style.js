import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  margin: 20px 0;
  border: 1px solid var(--black);
  background: var(--white);
  color: var(--black);
  box-shadow: 8px 8px 0 -1px var(--black);

  > header {
    padding: 15px;
    background-color: var(--black);
    color: var(--orange);
    text-align: center;

    > h1 {
      font-size: 1.2rem;
    }
  }

  > .category {
    margin: 10px;
    margin-left: 20px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h2 {
      font-size: 1.1rem;
    }

    > svg {
      width: 30px;
      height: 30px;
      background: ${(card) =>
        card.achieved === true
          ? "rgba(0,255,0,0.1);"
          : "rgb(224, 145, 104, 0.3);"};
      border-radius: 50%;
    }
  }

  p {
    margin-left: 20px;
    border-left: 3px solid var(--orange);
    padding-left: 5px;
    &:nth-child(4) {
      margin: 10px 0;
      margin-left: 20px;
    }
  }
  .buttons {
    margin: 10px auto;
    width: 150px;
    display: flex;
    justify-content: space-evenly;

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 2rem;
      }
    }
  }
  @media (min-width: 1024px) {
  }
`;
