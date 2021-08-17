import styled from "styled-components";

export const UserCardContainer = styled.div`
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

  h2 {
    font-size: 1.5rem;
    letter-spacing: 5px;
    margin: 0.5rem;
  }
  svg {
    font-size: 1.3rem;
  }
`;

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--light-green);
  color: var(--black);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 5rem;
  span {
    text-transform: uppercase;
  }
`;
