import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--green);
  h2 {
    text-align: center;
    padding: 1rem 0;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    div:last-child {
      grid-column: 1/3;
    }
  }

  @media screen and (min-width: 768px) {
    section {
      grid-template-columns: 150px 150px 150px;
      justify-content: center;

      div:nth-child(2) {
        grid-column: 3/4;
      }
      div:nth-child(3) {
        grid-column: 1/4;
      }

      div:last-child {
        grid-column: 3/4;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    section {
      grid-template-columns: 150px 150px 150px 150px 150px;
      justify-content: space-evenly;
      div:nth-child(2) {
        grid-column: auto;
      }
      div:nth-child(3) {
        grid-column: auto;
      }

      div:last-child {
        grid-column: auto;
      }
    }
  }
`;
