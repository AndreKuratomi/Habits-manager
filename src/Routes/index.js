import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Habits from "../Pages/Habits";
import CreateHabits from "../Pages/CreateHabit";
import EditHabit from "../Pages/EditHabit";
import Groups from "../Pages/Groups";
import CreateGroup from "../Pages/CreateGroup";
import EditGroup from "../Pages/EditGroup";
import Group from "../Pages/Group";
import Goals from "../Pages/Goals";
import CreateGoal from "../Pages/CreateGoal";
import EditGoal from "../Pages/EditGoal";
import Goal from "../Pages/Goal";
import Activities from "../Pages/Activities";
import CreateActivity from "../Pages/CreateActivity";
import EditActivity from "../Pages/EditActivity";
import Activity from "../Pages/Activity";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/dashboard/profile">
        <Profile/>
      </Route>
      <Route exact path="/dashboard/habits">
        <Habits/>
      </Route>
      <Route path="/dashboard/habits/create">
        <CreateHabits/>
      </Route>
      <Route path="/dashboard/habits/edit">
        <EditHabit/>
      </Route>
      
      <Route exact path="/dashboard/groups">
        <Groups/>
      </Route>
      <Route path="/dashboard/groups/create">
        <CreateGroup/>
      </Route>
      <Route path="/dashboard/groups/edit">
        <EditGroup/>
      </Route>
      <Route path="/dashboard/groups/group"> {/* usar useParams p pegar o grupo selecionado e mostrar apenas ele */}
        <Group/>
      </Route>

      <Route exact path="/dashboard/goals">
        <Goals/>
      </Route>
      <Route path="/dashboard/goals/create">
        <CreateGoal/>
      </Route>
      <Route path="/dashboard/goals/edit">
        <EditGoal/>
      </Route>
      <Route path="/dashboard/goals/goal"> {/* usar useParams p pegar a meta selecionada e mostrar apenas ela */}
        <Goal/>
      </Route>

      <Route exact path="/dashboard/activities">
        <Activities/>
      </Route>
      <Route path="/dashboard/activities/create">
        <CreateActivity/>
      </Route>
      <Route path="/dashboard/activities/edit">
        <EditActivity/>
      </Route>
      <Route path="/dashboard/activities/activity"> {/* usar useParams p pegar a meta selecionada e mostrar apenas ela */}
        <Activity/>
      </Route>
    </Switch>
  );
};

export default Routes;