import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const GroupsSubsContext = createContext();

export const GroupsSubsProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Habits:access"));
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api
      .get("/groups/subscriptions/", { headers: { Authorization: `Bearer ${token}` } })
      .then(resp => setGroups(resp.data))
      .catch(err => console.log(err));
  }, [token]);

  return (
    <GroupsSubsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsSubsContext.Provider>
  )
}

export const useGroupSubs = () => useContext(GroupsSubsContext);