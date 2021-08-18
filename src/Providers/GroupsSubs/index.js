import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useUser } from "../User";

const GroupsSubsContext = createContext();

export const GroupsSubsProvider = ({ children }) => {
  const { token } = useUser();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (token) {
      api
        .get("/groups/subscriptions/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => setGroups(resp.data))
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <GroupsSubsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsSubsContext.Provider>
  );
};

export const useGroupSubs = () => useContext(GroupsSubsContext);
