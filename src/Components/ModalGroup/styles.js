import styled from "styled-components";

export const Container = styled.article`
  background: var(--white);
  width: 90%;
  height: 80vh;
  overflow: auto;

  header {
    background: var(--black);
    color: var(--white);
    padding: 20px;

    h1 {
      font-family: var(--serif);
    }

    p { 
      font-family: var(--sansSerif);
    }

    div {
      display: flex;
      justify-content: space-between;

      svg {
        cursor: pointer;
        color: var(--orange);
      }

      &:first-child {
        margin-bottom: 10px;
      }
    }
  }

  main {
    padding: 20px;
    min-height: 50vh;


    section {
      margin: 10px;
      &:last-child {
        border-top: 4px solid var(--orange);
      }
    }
  }

  @media (min-width: 1024px) {
    main {
      display: flex;

      section {
        width: 50%;

        &:first-child {
          border-right: 4px solid var(--orange);
        }

        &:last-child {
          border-top: none;
        }
      }
    }
  }
`;
