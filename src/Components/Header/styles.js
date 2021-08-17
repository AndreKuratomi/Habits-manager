import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--green);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    transform: translateY(-5px);
    margin-left: 0.5rem;
    span {
      text-shadow: 0 1px 0 #f5f5f5, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
        0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
        0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
        0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
      color: var(--white);

      font-size: 3rem;
    }
  }
  ${(props) =>
    props.isLogged &&
    css`
      > div {
        position: relative;
        width: 70px;
        height: 70px;
        margin-right: 15px;
        > div {
          width: 40px;
          height: 40px;
          > span {
            font-size: 1.7rem;
          }
        }
        > h2 {
          margin: 5px 0 0;
          font-size: 0.8rem;
          letter-spacing: normal;
        }
        > svg {
          font-size: 1rem;
          position: absolute;
          top: 7px;
          right: -5px;
        }
      }
    `}

  div {
    display: flex;
    > button {
      width: 70px;
    }
    > button + button {
      margin: 0 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    a {
      margin-left: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    ${(props) =>
      props.isLogged &&
      css`
        div {
          display: none;
        }
      `}
  }
`;
