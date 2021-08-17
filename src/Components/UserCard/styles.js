import styled from "styled-components";

export const UserCardContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {

    background-color: var(--green);
    width: 200px;
    height: 200px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    box-shadow: 2px 3px 17px 5px rgba(128, 201, 172, 0.6);

    img {
      width: 100px;
      height: 100px;
    }
    h2 {
      font-size: 1rem;
      margin: 0.5rem;
    }
    svg {
      font-size: 1.3rem;
    }

  }
`;
