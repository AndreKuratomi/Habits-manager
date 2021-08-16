import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 3px 1px 11px 8px rgba(128, 201, 172, 0.64);

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

      a {
        color: var(--orange);
        &:hover {
          text-decoration: underline;
        }
      }
    }

    > button {
      width: 100%;
      height: 40px;
    }
  }
`;
