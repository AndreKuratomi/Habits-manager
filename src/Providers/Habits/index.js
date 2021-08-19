import { createContext, useContext, useEffect, useState } from "react";

import api from "../../Services/api";
import { toast } from "react-toastify";
import { useLogin } from "../Login";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const { user } = useLogin();
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((items) => {
        setHabits(items.data);
      })
      .catch((_) => toast.error("Erro de conexão"));
  }, [user.token]);

  const submitHabits = (data) => {
    api
      .post(
        "/habits/",
        { ...data, user: user.id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((resp) => {
        setHabits([...habits, resp.data]);
        toast.success("Hábito cadastrado com sucesso!");
      })
      .catch((_) => toast.error("Falha ao cadastrar!"));
  };

  const deleteElement = (id) => {
    const filter = habits.filter((item) => item.id !== id);

    api
      .delete(`habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => {
        setHabits(filter);
        toast.success("Card deletado com sucesso");
      })
      .catch((_) => toast.error("Erro de conexão"));
  };

  return (
    <HabitsContext.Provider value={{ submitHabits, habits, deleteElement }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);