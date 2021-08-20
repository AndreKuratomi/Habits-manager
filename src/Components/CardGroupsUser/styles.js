import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  min-width: 200px;
  max-width: 280px;
  min-height: 145px;
  max-height: 145px;
  margin: 20px;
  border-radius: 5px;
  background-color: var(--white);
  word-break: break-all;
  border: 3px solid var(--orange);
  border-radius: 10px;
  box-shadow: 8px 8px 0 -1px var(--black);

  > h3 {
    background-color: var(--black);
    color: var(--orange);
    width: 100%;
    padding: 10px;
    border-radius: 7px 7px 0 0;
    font-family: var(--serif);
    font-weight: normal;
  }

  > p {
    margin: 20px;
    font-family: var(--sansSerif);
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.1rem;
    }
  }
`;
