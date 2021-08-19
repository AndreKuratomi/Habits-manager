import { createContext, useState, useContext } from "react";
import { useLogin } from "../Login";
import api from "../../Services/api";
import { toast } from "react-toastify";

const UpdateContext = createContext();

export const UpdateProvider = ({ children }) => {
  const [update, setUpdate] = useState({});
  const { user } = useLogin();

  const updateElements = (id, data) => {
    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => toast.success("Hábito atualizado com sucesso!"))
      .catch((_) => toast.error("Erro de conexão"));
  };

  return (
    <UpdateContext.Provider value={{ updateElements, update, setUpdate }}>
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdate = () => useContext(UpdateContext);
