import { createContext, useContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import api from "../../Services/api";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [id, setId] = useState(
    JSON.parse(localStorage.getItem("@Habits:userId")) || ""
  );

  const submitLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((resp) => {
        const { access } = resp.data;
        const decoded = jwtDecode(access);

        setId(decoded.user_id);

        localStorage.setItem("@Habits:userId", JSON.stringify(decoded.user_id));
        localStorage.setItem("@Habits:access", JSON.stringify(access));
      })
      .catch((_) => toast.error("Nome de Usuário ou Senha Incorreta!"));
  };

  return (
    <LoginContext.Provider value={{ submitLogin, id }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
