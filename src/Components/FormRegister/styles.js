import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: var(--white);

  h2 {
    color: var(--orange);
    margin-bottom: 20px;
  }
  
  form {
    text-align: center;

    div {
      margin-bottom: 10px;
    }

    p {
      margin-top: 10px;

      span {
        color: var(--orange);
      }
    }

    > button {
      width: 100%;
    }
  }
`;
