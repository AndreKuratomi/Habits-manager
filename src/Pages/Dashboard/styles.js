import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 3rem 1.5rem;
`;

export const DashboardMenu = styled.aside`
  background-color: none;
  padding: 1rem;
  width: 10vw;
`;

export const ListsContainer = styled.section`
  background-color: var(--green);
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  width: 70vw;
`;

export const AsideContainer = styled.aside`
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
`;

export const UserDiv = styled.div`
  background-color: var(--green);
  border-radius: 1rem;
  margin: 0 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  height: 20vh;
  width: 90%;
`;

export const GroupsDiv = styled.div`
  background-color: var(--green);
  border-radius: 1rem;
  margin: 0 1rem;
  height: 50vh;
  width: 90%;
`;
