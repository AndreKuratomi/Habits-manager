import { useState } from "react";

import Header from "../../Components/Header";
import DashboardMenu from "../../Components/DashboardMenu";
import UserCard from "../../Components/UserCard";
import ListHabits from "../../Components/ListHabits";
import GroupsSubs from "../../Components/GroupsSubs";
import Button from "../../Components/Button";
import ModalHabits from "../../Components/ModalHabits";

import { useGroupsList } from "../../Providers/GroupsList";
import { useGroupSubs } from "../../Providers/GroupsSubs";

import {
  MainContainer,
  MenuDashboard,
  ListsContainer,
  AsideContainer,
  ContainerHeader,
} from "./styles";

const Dashboard = () => {
  const [modalHabitsDisplay, setmodalHabitsDisplay] = useState(false);
  const [menuItem, setMenuItem] = useState("Habits");

  const { groupsList } = useGroupsList();
  const { groups } = useGroupSubs();

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
          <DashboardMenu setMenuItem={setMenuItem} />
        </MenuDashboard>

        <ListsContainer>
          {menuItem === "SubGroups" ? (
            <>
              <ContainerHeader>
                <h1>Grupos inscritos</h1>
              </ContainerHeader>
              <div>
                <GroupsSubs groups={groups} />
              </div>
            </>
          ) : menuItem === "AllGroups" ? (
            <>
              <ContainerHeader>
                <h1>Todos os Grupos</h1>
                <Button onClick={() => openModal()}>Novo</Button>
              </ContainerHeader>
              <div>
                <GroupsSubs groups={groupsList} />
              </div>
            </>
          ) : (
            <>
              <ContainerHeader>
                <h1>Hábitos</h1>
                <Button onClick={() => openModal()}>Novo</Button>
              </ContainerHeader>
              <div>
                <ListHabits />
              </div>
            </>
          )}
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
