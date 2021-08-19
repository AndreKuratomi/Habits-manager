import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr;
  main {
    min-height: calc(100vh - 70px - 265px);
    section {
      article {
        width: 300px;
        margin: 2rem auto 0;
        text-align: center;

        h2 {
          font-family: var(--serif);
          font-weight: normal;
          margin-bottom: 1rem;
          letter-spacing: 7px;
        }

        p {
          font-family: var(--sansSerif);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    main {
      section {
        article {
          width: 500px;

          h2 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1.5rem;
          }
        }

        figure {
          text-align: center;
          img {
            width: 500px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    main {
      section {
        display: flex;
        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 450px;
          h2 {
            flex: 2;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          p {
            flex: 3;
          }
        }
      }
    }
  }
`;
