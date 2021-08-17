import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const getElements = () => {
    api
      .get("/habits/")
      .then((items) => {
        setHabits(items.results);
        console.log(habits);
      })
      .catch((_) => toast.error("Erro de conexão"));
  };
  return (
    <CardsContext.Provider value={{ getElements, habits }}>
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => useContext(CardsContext);
