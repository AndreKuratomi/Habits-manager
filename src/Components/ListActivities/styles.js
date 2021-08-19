import styled from "styled-components";

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 100%;
    text-align: center;
    padding-top: 0.5rem;
    margin: 0.5rem 0 1rem;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    li {
      width: 100%;
      display: flex;
      justify-content: center;

    }
  }
`;
