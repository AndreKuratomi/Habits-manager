import { createContext, useContext, useState } from "react";
import api from "../../Services/api";

const CardsContext = createContext();

const ids =

export const CardsProvider = ({ children }) => {
  const something = (id) => {
    api
      .get(`/habits/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <CardsContext.Provider value={{ something }}>
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => useContext(CardsContext);
