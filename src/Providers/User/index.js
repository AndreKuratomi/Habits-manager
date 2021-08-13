import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const id = JSON.parse(localStorage.getItem("@Habits:userID")) || '';
  const [user, setUser] = useState({});

  useEffect(() => {
    if (id !== "") {
      api
        .get(`/users/${id}/`)
        .then(resp => {
          setUser(resp.data)
        })
        .catch(err => console.log(err))
    }
  }, [id]);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);