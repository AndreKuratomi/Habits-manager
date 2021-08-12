import { createContext, useContext, useState } from "react";
import api from "../../Services/api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);

  console.log(token);
  console.log(userId);

  const submitLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((resp) => {
        const { access } = resp.data;

        const decoded = jwtDecode(access);

        localStorage.setItem("@Habits:access", access);

        setToken(access);
        setUserId(decoded.user_id);
      })
      .catch((_) => toast.error("Nome de Usuário ou Senha Incorreta!!"));
  };

  return (
    <LoginContext.Provider value={{ submitLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
