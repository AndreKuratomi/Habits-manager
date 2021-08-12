// import DashboardMenu from "../../Components/DashboardMenu";
// import Card from "../../Components/Card";
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
  UserDiv,
  GroupsDiv,
} from "./styles";

const Dashboard = () => {
  return (
    <>
      <MainContainer>
        <DashboardMenu>DashboardMenu{/* <DashboardMenu /> */}</DashboardMenu>
        <ListsContainer>
          <ListHabits />
          {/* <ListActivities />
            <ListGoals /> */}
        </ListsContainer>
        <AsideContainer>
          <UserDiv>User{/* <Card /> */}</UserDiv>
          <GroupsDiv>Groups{/* <ListGroups /> */}</GroupsDiv>
        </AsideContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
