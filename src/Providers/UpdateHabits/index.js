import { createContext, useState, useContext } from "react";
import api from "../../Services/api";

const UpdateContext = createContext();

const token = JSON.parse(localStorage.getItem("@Habits:access"));

export const UpdateProvider = ({ children }) => {
  const [update, setUpdate] = useState({});

  const updateElements = (id, data) => {
    console.log(id);
    console.log(data);
    console.log(token);
    api
      .patch(`/habits/${id}/`, data, {
        header: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <UpdateContext.Provider value={{ updateElements, update, setUpdate }}>
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdate = () => useContext(UpdateContext);
