import DashboardMenu from "../../Components/DashboardMenu";
import Header from "../../Components/Header";
import UserCard from "../../Components/UserCard";
import ListHabits from "../../Components/ListHabits";
// import ListGoals from "../../Components/ListGoals";
// import ListActivities from "../../Components/ListActivities";
// import ListGroups from "../../Components/ListGroups";
import GroupsSubs from "../../Components/GroupsSubs";
import Button from "../../Components/Button";

import {
  MainContainer,
  MenuDashboard,
  ListsContainer,
  AsideContainer,
  GroupsDiv,
  ContainerHeader,
} from "./styles";

import ModalHabits from "../../Components/ModalHabits";
import { useState } from "react";
import { useUser } from "../../Providers/User";

const Dashboard = () => {
  const [modalHabitsDisplay, setmodalHabitsDisplay] = useState(false);

  const openModal = () => {
    setmodalHabitsDisplay(true);
  };
  const closeModal = () => {
    setmodalHabitsDisplay(false);
  };

  return (
    <>
      <ModalHabits display={modalHabitsDisplay} close={closeModal} />

      <Header isLogged />

      <MainContainer>
        <MenuDashboard>
          <DashboardMenu />
        </MenuDashboard>

        <ListsContainer>
          <ContainerHeader>
            <h1>Hábitos</h1>
            <Button onClick={() => openModal()}>Novo</Button>
          </ContainerHeader>
          <div>
            <ListHabits />
          </div>
        </ListsContainer>

        <AsideContainer>
          <div>
            <UserCard />
          </div>
        </AsideContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
