import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  width: 200px;
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid var(--black);
  background: var(--white);
  box-shadow: 8px 8px 0 -1px var(--black);

  header {
    width: 100%;
    height: 40px;
    font-size: 1.7rem;
    padding: 0 15px;
    color: var(--black);
    border-bottom: 1px solid var(--black);
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 1.2rem;
    width: 90%;
    margin: 10px 0;
  }

  p {
    width: 80%;
    text-align: left;
    margin-top: 20px;
    padding: 0 5px;
    border-left: 3px solid var(--orange);
    font-size: 1rem;

    &:last-child {
      margin-bottom: 20px;
    }
  }

  div {
    width: 90%;
    height: 50px;
    font-size: 1.2rem;
    display: flex;
    flex-flow: row;
    align-items: center;

    svg {
      width: 46px;
      height: 40px;
      border-radius: 50%;
      background: ${(card) =>
        card.achieved === true
          ? "rgba(0,255,0,0.1);"
          : "rgb(224, 145, 104, 0.3);"};
    }
  }

  @media (min-width: 1024px) {
    margin: 30px;
  }
`;
