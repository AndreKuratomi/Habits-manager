import styled from "styled-components";

export const BtnContainer = styled.button`
  background-color: var(--green);
  border: 2px solid var(--light-green);
  border-radius: 1rem;
  color: var(--white);
  height: 30px;
  width: 100px;
  font-family: var(--sansSerif);
  font-size: 1rem;
  &:hover {
    filter: brightness(1.15);
    transition: 0.5s;
  }
`;
