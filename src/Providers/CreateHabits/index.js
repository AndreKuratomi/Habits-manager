import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "../User";

import api from "../../Services/api";
import { toast } from "react-toastify";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const { user, token } = useUser();
  const [habits, setHabits] = useState([]);
  console.log(user, token)

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((items) => {
        setHabits(items.data);
      })
      .catch((_) => toast.error("Erro de conexão"));
  }, [token]);

  const submitHabits = (data) => {
    api
      .post("/habits/", { ...data, user: user.id }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setHabits([...habits, resp.data]);
        toast.success("Hábito cadastrado com sucesso!");
      })
      .catch((_) => toast.error("Falha ao cadastrar!"));
  };

  return (
    <HabitsContext.Provider value={{ submitHabits, habits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
