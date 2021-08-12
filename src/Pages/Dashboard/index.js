// import DashboardMenu from "../../Components/DashboardMenu";
import Header from "../../Components/Header";
import UserCard from "../../Components/UserCard";
import ListHabits from "../../Components/ListHabits";
// import ListGoals from "../../Components/ListGoals";
// import ListActivities from "../../Components/ListActivities";
// import ListGroups from "../../Components/ListGroups";
// import ListActivities from "../../Components/ListActivities";

import {
  MainContainer,
  DashboardMenu,
  ListsContainer,
  AsideContainer,
  GroupsDiv,
} from "./styles";

const Dashboard = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <DashboardMenu>DashboardMenu{/* <DashboardMenu /> */}</DashboardMenu>
        <ListsContainer>
          <ListHabits />
          {/* <ListActivities />
            <ListGoals /> */}
        </ListsContainer>
        <AsideContainer>
          <div>
            <UserCard />
          </div>
          <GroupsDiv>Groups{/* <ListGroups /> */}</GroupsDiv>
        </AsideContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
