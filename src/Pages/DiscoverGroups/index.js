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

const DiscoverGroups = () => {

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
              <h1>Todos os Grupos</h1>
              <Button onClick={() => openModal()}>Novo</Button>
            </ContainerHeader>
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
}

export default DiscoverGroups;