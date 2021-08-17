import { createContext, useContext } from "react";

import api from "../../Services/api";
import { toast } from "react-toastify";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Habits:access"));

  const submitGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Grupo criado com sucesso!");
      })
      .catch((_) => toast.error("Falha ao cadastrar!"));
  };

  return (
    <GroupContext.Provider value={{ submitGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
