import { createContext, useContext } from "react";

import api from "../../Services/api";
import { toast } from "react-toastify";
import { useGroupSubs } from "../GroupsSubs";

const JoinGroupContext = createContext();

export const JoinGroupProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Habits:access"));
  const { groups } = useGroupSubs();
  console.log(groups)

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
    <JoinGroupContext.Provider value={{ submitJoinGroup }}>
      {children}
    </JoinGroupContext.Provider>
  );
};

export const useJoinGroup = () => useContext(JoinGroupContext);
