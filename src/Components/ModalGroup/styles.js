import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80vh;
  background: var(--white);

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--black);
    color: var(--white);
    padding: 20px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        &:first-child {
            margin-bottom: 20px;
        }
    }

    button {
      background: var(--black);
      color: var(--white);
      border: 0;
    }
  }

  main {
      padding: 20px;
      min-height: 50vh;
  }
`;