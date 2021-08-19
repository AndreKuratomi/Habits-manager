import { useState } from "react";

import Header from "../../Components/Header";
import DashboardMenu from "../../Components/DashboardMenu";
import UserCard from "../../Components/UserCard";
import ListHabits from "../../Components/ListHabits";
import GroupsSubs from "../../Components/GroupsSubs";
import Button from "../../Components/Button";

import ModalHabits from "../../Components/ModalNewHabit";
import ModalGroups from "../../Components/ModalNewGroup";
import ModalPatch from "../../Components/ModalPatch";

import { useGroupsList } from "../../Providers/GroupsList";
import { useGroupSubs } from "../../Providers/GroupsSubs";

import {
  MainContainer,
  MenuDashboard,
  ListsContainer,
  AsideContainer,
  ContainerHeader,
} from "./styles";

import BackgroundModal from "../../Components/BackgroundModal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [menuItem, setMenuItem] = useState("");


  const { groupsList } = useGroupsList();
  const { groups } = useGroupSubs();

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <Header />
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
                <GroupsSubs groups={groups} card="SubGroups" />
              </div>
            </>
          ) : menuItem === "AllGroups" ? (
            <>
              <BackgroundModal
                children={<ModalGroups close={closeModal} />}
                modal={modal}
              />
              <ContainerHeader>
                <h1>Todos os Grupos</h1>
                <Button onClick={() => openModal()}>Novo</Button>
              </ContainerHeader>
              <div>
                <GroupsSubs groups={groupsList} card="AllGroups" />
              </div>
            </>
          ) : (
            <>
              <BackgroundModal
                children={<ModalHabits close={closeModal} />}
                modal={modal}
              />
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
