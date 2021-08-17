import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import UserGroups from "../Pages/UserGroups";
import NotFound from "../Components/NotFound";
import DiscoverGroups from "../Pages/DiscoverGroups";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/groups">
        <UserGroups />
      </Route>
      
      <Route path="/discover">
        <DiscoverGroups />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
