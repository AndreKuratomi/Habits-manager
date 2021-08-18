import styled from "styled-components";

export const Background = styled.div`
  display: ${(props) => (props.modal ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 111;
`;