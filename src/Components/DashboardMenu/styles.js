import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;

  @media (min-width: 1024px) {
    margin: 0;
    flex-direction: column;
    align-items: center;
    height: 400px;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 3px 4px 0px 0px #669985;
  background: linear-gradient(to bottom, #cfffec 5%, #80c9ac 100%);
  background-color: #cfffec;
  border-radius: 50%;
  border: 1px solid #669985;

  svg {
    color: var(--dark-green);
  }

  &:hover {
    background: linear-gradient(to bottom, #80c9ac 5%, #cfffec 100%);
    background-color: #80c9ac;
  }

  &:active {
    box-shadow: 0px 0px 0px 0px #669985;
    transform: translate(3px, 4px);
  }

  @media (min-width: 1024px) {
    width: 70px;
    height: 70px;
    font-size: 3rem;
  }
`;
