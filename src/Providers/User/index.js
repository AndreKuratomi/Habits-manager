import { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import api from "../../Services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Habits:user")) || {}
  );

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (user.token) {
      return setAuth(true);
    }
  }, [user]);

  const submitLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((resp) => {
        const { access } = resp.data;
        const decoded = jwtDecode(access);

        setUser({ name: data.username, id: decoded.user_id, token: access });

        localStorage.setItem(
          "@Habits:user",
          JSON.stringify({
            name: data.username,
            id: decoded.user_id,
            token: access
          }));
      })
      .catch((_) => toast.error("Nome de Usuário ou Senha Incorreta!"));
  };

  return (
    <UserContext.Provider value={{ submitLogin, user, setUser, auth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

