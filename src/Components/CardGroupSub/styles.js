import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  border: 3px solid var(--orange);
  height: 200px;
  width: 260px;
  margin: 10px;
  border-radius: 10px;

  box-shadow: 8px 8px 0 -1px var(--black);
  background-color: var(--white);
  text-align: center;

  p {
    max-width: 25ch;
    text-overflow: ellipsis;
    white-space: normal;
    text-align: left;

    margin: 10px;
  }

  button {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%);
  }

  div:nth-child(3) {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    
    p {
      text-align: center; 

      span {
        font-weight: bold;
        color: var(--orange);
      }
    }
  }
`;

export const Header = styled.div`
  position: relative;
  min-width: 100%;
  height: 35px;
  color: var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px 7px 0 0;
  background-color: var(--black);

  p {
    max-width: 25ch;
    overflow: hidden;
    white-space: nowrap;
    margin: 10px;
  }
`;
