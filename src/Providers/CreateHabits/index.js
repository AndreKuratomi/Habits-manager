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
  const submitHabits = (data) => {
    const newObject = { ...data, user: id };
    console.log(newObject);

    api
      .post("/habits/", newObject)
      .then((response) => {
        const newResponse = response.data;
        console.log(newResponse);
        JSON.parse(localStorage.setItem("@Habits:habit", newResponse));
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
