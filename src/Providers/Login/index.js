import { createContext, useContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useAuth } from "../../Providers/Auth";

import api from "../../Services/api";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const { setAuth } = useAuth();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Habits:user")) || {}
  );

  const submitLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((resp) => {
        const { access } = resp.data;
        const decoded = jwtDecode(access);

        setAuth(true);

        setUser({ name: data.username, id: decoded.user_id, token: access });

        localStorage.setItem("@Habits:user", JSON.stringify({ name: data.username, id: decoded.user_id, token: access }))
        localStorage.setItem("@Habits:userName", JSON.stringify(data.username));
        localStorage.setItem("@Habits:userId", JSON.stringify(decoded.user_id));
        localStorage.setItem("@Habits:access", JSON.stringify(access));
      })
      .catch((_) => toast.error("Nome de Usuário ou Senha Incorreta!"));
  };

  return (
    <LoginContext.Provider value={{ submitLogin, user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);