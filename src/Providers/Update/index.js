import { createContext, useState, useContext } from "react";
import { useLogin } from "../Login";
import { toast } from "react-toastify";
import api from "../../Services/api";

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
      .catch((_) => toast.error("Erro ao Atualizar Hábito"));
  };

  const updateGoal = (id, data) => {
    api
      .patch(`/goals/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => toast.success("Meta Atualizada"))
      .catch((_) => toast.error("Erro ao atualizar Meta"));
  };

  const updateActivity = (id, data) => {
    api
      .patch(`/activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => toast.success("Atividade Atualizada"))
      .catch((_) => toast.error("Erro ao atualizar atividade"));
  };

  return (
    <UpdateContext.Provider
      value={{ updateElements, update, setUpdate, updateGoal, updateActivity }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdate = () => useContext(UpdateContext);
