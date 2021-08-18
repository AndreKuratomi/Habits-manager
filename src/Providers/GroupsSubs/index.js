import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useUser } from "../User";
import { toast } from "react-toastify";

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

  const submitJoinGroup = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        // setNewGroup('newGroup');
        toast.success("Entrou com sucesso!");
      })
      .catch((_) => {
        console.log(_)
        toast.error("Usuario já cadastrado")
      });
  };

  return (
    <GroupsSubsContext.Provider value={{ groups, setGroups, submitJoinGroup }}>
      {children}
    </GroupsSubsContext.Provider>
  );
};

export const useGroupSubs = () => useContext(GroupsSubsContext);
