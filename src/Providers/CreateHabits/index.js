import { createContext, useContext, useEffect } from "react";

import api from "../../Services/api";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  // useEffect(() => {
  //   api.get(`/users/${id}`).then().catch()
  // }, [])

  const id = JSON.parse(localStorage.getItem("@Habits:userID"));
  const token = JSON.parse(localStorage.getItem("@Habits:access"));

  const submitHabits = (data) => {
    const newObject = { ...data, user: id };

    api
      .post("/habits/", newObject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
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
