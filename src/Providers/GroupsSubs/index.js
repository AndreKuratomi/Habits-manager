import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useUser } from "../User";

const GroupsSubsContext = createContext();

export const GroupsSubsProvider = ({ children }) => {
  const { token } = useUser();
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState('');

  useEffect(() => {
    if (token) {
      api
        .get("/groups/subscriptions/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => setGroups(resp.data))
        .catch((err) => console.log(err));
    }
  }, [token, newGroup]);

  return (
    <GroupsSubsContext.Provider value={{ groups, setGroups, setNewGroup }}>
      {children}
    </GroupsSubsContext.Provider>
  );
};

export const useGroupSubs = () => useContext(GroupsSubsContext);
