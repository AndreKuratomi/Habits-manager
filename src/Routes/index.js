import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Groups from "../Pages/Groups";

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
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route exact path="/groups">
        <Groups/>
      </Route>
    </Switch>
  );
};

export default Routes;