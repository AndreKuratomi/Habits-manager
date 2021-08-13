import styled from "styled-components";

export const DeveloperCardContainer = styled.div`
  width: 160px;
  height: 205px;
  max-height: 205px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    border: 4px double var(--light-green);
  }
  p {
    margin: 0.5rem 0;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
      a {
        color: var(--black);
        &:hover {
          color: var(--light-green);
        }
        svg {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
