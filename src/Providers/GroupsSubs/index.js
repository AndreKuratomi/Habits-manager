import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useLogin } from "../Login";

const GroupsSubsContext = createContext();

export const GroupsSubsProvider = ({ children }) => {
  const { user } = useLogin();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (user.token) {
      api
        .get("/groups/subscriptions/", {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((resp) => setGroups(resp.data))
        .catch((err) => console.log(err));
    }
  }, [user.token, groups]);

  const submitJoinGroup = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        getNewGroup(id);
        toast.success("Entrou com sucesso!");
      })
      .catch((_) => {
        toast.error("Usuario já cadastrado");
      });
  };

  const getNewGroup = (id) => {
    return api
      .get(`/groups/${id}/`)
      .then((resp) => setGroups([...groups, resp.data]));
  };

  return (
    <GroupsSubsContext.Provider value={{ groups, setGroups, submitJoinGroup }}>
      {children}
    </GroupsSubsContext.Provider>
  );
};

export const useGroupSubs = () => useContext(GroupsSubsContext);
