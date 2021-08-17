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
import { useUser } from "../../Providers/User";

import ModalHabits from "../../Components/ModalHabits";
import { useState } from "react";
import { useAuth } from "../../Providers/Auth";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const [modalHabitsDisplay, setmodalHabitsDisplay] = useState(false);

  const openModal = () => {
    setmodalHabitsDisplay(true);
  };
  const closeModal = () => {
    setmodalHabitsDisplay(false);
  };

  // const { user } = useUser();
  const { auth } = useAuth();

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <ModalHabits display={modalHabitsDisplay} close={closeModal} />
      <Header />
      <MainContainer>

        <MenuDashboard>
          <DashboardMenu />
        </MenuDashboard>

        <ListsContainer>
          <ContainerHeader>
            <h1>Hábitos</h1>
            <Button onClick={() => openModal()}>Novo</Button>
          </ContainerHeader>
          <ListHabits />
          {/* <ListActivities />
            <ListGoals /> */}
        </ListsContainer>

        <AsideContainer>
          <div>
            <UserCard />
          </div>
          <GroupsDiv>
            <GroupsSubs />
          </GroupsDiv>
        </AsideContainer>
        
      </MainContainer>
    </>
  );
};

export default Dashboard;
