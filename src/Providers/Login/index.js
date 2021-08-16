import { createContext, useContext } from "react";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import api from "../../Services/api";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const submitLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((resp) => {
        const { access } = resp.data;
        const decoded = jwtDecode(access);

        localStorage.setItem("@Habits:access", JSON.stringify(access));

        localStorage.setItem("@Habits:userID", JSON.stringify(decoded.user_id));
      })
      .catch((err) => toast.error("Nome de Usuário ou Senha Incorreta!"));
  };

  return (
    <LoginContext.Provider value={{ submitLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
