import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const CardsContext = createContext();

const token = JSON.parse(localStorage.getItem("@Habits:access"));

export const CardsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const getElements = () => {
    api
      .get("/habits/")
      .then((items) => {
        setHabits([...habits, ...items.data.results]);
      })
      .catch((_) => toast.error("Erro de conexão"));
  };
  // melhor ficar numa ListsProvider????

  const deleteElements = (id) => {
    const filter = habits.filter((item) => item.id !== id);

    api
      .delete(`habits/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(setHabits(filter), toast.success("Card deletado com sucesso"))
      .catch((_) => toast.error("Erro de conexão"));
  };

  const updateElements = () => {};

  return (
    <CardsContext.Provider
      value={{ habits, getElements, deleteElements, updateElements }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => useContext(CardsContext);
