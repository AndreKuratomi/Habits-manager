import styled from "styled-components";

export const FormLoginContainer = styled.form`
  background-color: var(--white);
  width: 300px;
  height: 350px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 1px 11px 8px rgba(128, 201, 172, 0.64);

  h2 {
    color: var(--orange);
    margin: 1.5rem 0;
  }
  div {
    width: 90%;
    height: 50px;
    div {
      input {
      }
      svg {
      }
    }
  }
  div + div {
    margin: 2rem 0;
  }

  > button {
    height: 40px;
    width: 80%;
    font-size: 1rem;
  }
  p {
    margin: 1rem 0;
    a {
      color: var(--orange);
    }
  }
`;
