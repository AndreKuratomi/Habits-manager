import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { useLogin } from "../Login";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const id = useLogin();
  const token = JSON.parse(localStorage.getItem("@Habits:access"));
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Habits:user")) || {}
  );

  useEffect(() => {
    if (id !== "") {
      api
        .get(`/users/${id}/`)
        .then((resp) => {
          setUser(resp.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <UserContext.Provider value={{ user, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
