import { createContext, useContext } from "react";

import api from "../../Services/api";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const HabitsContext = createContext();

export const HabitsGenerator = ({ children }) => {
  const submitHabits = (data) => {
    api
      .post("/habits/", data)
      .then((response) => {
        console.log(response.data);
        const { title } = response.data;
        const decoded = jwtDecode(title);
        console.log(decoded);

        localStorage.setItem("@Habits:habit", decoded.title);
        // localStorage.setItem("@Habits:user_ID", decoded.id);

        localStorage.setItem("@Habits:habit_ID", decoded.id);

        toast.success("Hábito cadastrado com sucesso!");
      })
      .catch((_) => toast.error("Falha ao cadastrar!"));
  };

  return (
    <HabitsContext.Provider value={{ submitHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
