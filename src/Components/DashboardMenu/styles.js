import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 500px;
  background-color: #cfffec;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 0 6px;
  border-radius: 50px;
  font-size: 50px;
  position: relative;

  .msg-Home {
    position: absolute;
    top: -24px;
    left: 4px;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .msg-Habits {
    position: absolute;
    top: -24px;
    left: -5px;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .msg-Group {
    position: absolute;
    top: -24px;
    left: -2px;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .msg-Goal {
    position: absolute;
    top: -24px;
    left: 3px;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .msg-Activities {
    position: absolute;
    top: -24px;
    left: -18px;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }

  &:hover {
    border: 2px solid #80c9ac;
  }
`;
