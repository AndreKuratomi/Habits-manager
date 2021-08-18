import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  background-color: #cfffec;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
  }

  &:hover {
    border: 2px solid #80c9ac;
  }

  @media (min-width: 1024px) {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }
`;
