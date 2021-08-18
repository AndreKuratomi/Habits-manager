import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 50px 0;
  }
`;

export const MenuDashboard = styled.aside`
  width: 320px;
  background-color: none;
  display: flex;
  justify-content: center;
  width: 90%;

  @media (min-width: 1024px) {
    width: 10%;
  }
`;

export const ListsContainer = styled.section`
  height: 80vh;
  width: 100%;
  background-color: var(--green);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px 1px var(--green);
  overflow: hidden;

  > div {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  @media (min-width: 1024px) {
    width: 70%;
    border-radius: 10px;
  }
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: var(--dark-green);
  color: var(--white);

  @media (min-width: 1024px) {
    border-radius: 10px 10px 0 0;
  }
`;

export const AsideContainer = styled.aside`
  width: 90%;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 20%;

    div {
      display: flex;
    }
  }
`;

export const GroupsDiv = styled.div`
  display: none;
  background-color: var(--green);
  border-radius: 1rem;
  margin-top: 1rem;
`;
