import DashboardMenu from "../../Components/DashboardMenu";
import Header from "../../Components/Header";
import UserCard from "../../Components/UserCard";
import GroupsSubs from "../../Components/GroupsSubs";
import Button from "../../Components/Button";
import { useState } from "react";

import {
  MainContainer,
  MenuDashboard,
  ListsContainer,
  AsideContainer,
  GroupsDiv,
  ContainerHeader,
} from "./../Dashboard/styles";
import { useGroupSubs } from "../../Providers/GroupsSubs";

const UserGroups = () => {

  const { groups } = useGroupSubs();

  const [modalHabitsDisplay, setmodalHabitsDisplay] = useState(false);

  const openModal = () => {
    setmodalHabitsDisplay(true);
  };
  const closeModal = () => {
    setmodalHabitsDisplay(false);
  };

  return (
    <>
      <Header isLogged></Header>

      <MainContainer>
        <MenuDashboard>
          <DashboardMenu />
        </MenuDashboard>

        <ListsContainer>
          <ContainerHeader>
            <h1>Grupos inscritos</h1>
          </ContainerHeader>
          <div>
            <GroupsSubs groups={groups} />
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

export default UserGroups;
