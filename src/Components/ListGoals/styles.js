import styled from "styled-components";

export const ListGoalsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 100%;
    text-align: center;
    padding-top: 0.5rem;
    margin: 0.5rem 0 1rem;
    border-top: 4px solid var(--orange);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
