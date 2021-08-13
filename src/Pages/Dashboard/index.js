import DashboardMenu from "../../Components/DashboardMenu";
import Header from "../../Components/Header";
import UserCard from "../../Components/UserCard";
import ListHabits from "../../Components/ListHabits";
// import ListGoals from "../../Components/ListGoals";
// import ListActivities from "../../Components/ListActivities";
// import ListGroups from "../../Components/ListGroups";
// import ListActivities from "../../Components/ListActivities";
import GroupsSubs from "../../Components/GroupsSubs";

import {
  MainContainer,
  MenuDashboard,
  ListsContainer,
  AsideContainer,
  GroupsDiv,
} from "./styles";
import { useUser } from "../../Providers/User";

const Dashboard = () => {
  const { user } = useUser();
  console.log(user.id, user.username, user.email);
  return (
    <>
      <Header />
      <MainContainer>
        <MenuDashboard>
          <DashboardMenu />
        </MenuDashboard>
        <ListsContainer>
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
