import styled from "styled-components";

export const Container = styled.li`
  border: 3px solid var(--orange);
  height: 130px;
  width: 250px;
  margin: 10px;
  border-radius: 10px;

  box-shadow: 8px 8px 0 -1px var(--black);
  background-color: var(--white);
  text-align: center;
  h3 {
    min-width: 100%;

    height: 35px;
    color: var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px 7px 0 0;
    background-color: var(--black);
    span {
      max-width: 25ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  p {
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;

    margin: 10px;
  }
  button {
    margin-top: 7px;
  }
`;
