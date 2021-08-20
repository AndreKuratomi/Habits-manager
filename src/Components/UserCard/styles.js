import styled from "styled-components";

export const UserCardContainer = styled.div`
  background-color: var(--green);
  color: var(--white);
  box-shadow: 2px 3px 17px 5px rgba(128, 201, 172, 0.6);

  width: 170px;
  height: 200px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  h2 {
    font-size: 1.5rem;
    letter-spacing: 5px;
    margin: 0.5rem;
    font-family: var(--sansSerif);
  }
  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const UserImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--light-green);
  color: var(--black);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 5rem;
  span {
    text-transform: uppercase;
    font-family: var(--serif);
  }
`;

export const UpdateUserContainer = styled.form`
  background-color: rgb(24, 24, 24, 0.6);
  position: absolute;
  top: 25px;
  right: -5px;
  width: 170px;
  height: 130px;

  padding: 15px;
  border-radius: 5px;

  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > svg {
    color: var(--orange);
    font-size: 15px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
  > input {
    width: 100%;
    height: 25px;
    padding-left: 1rem;
    border-radius: 1rem;
    background-color: transparent;
    border: 2px solid var(--green);
    color: var(--light-green);
    &::placeholder {
      color: var(--light-green);
    }
  }
  > button {
    width: 100%;
    margin-top: 10px;
    height: 25px;
  }

  @media screen and (min-width: 1024px) {
    top: 215px;
    right: 0;
  }
`;
