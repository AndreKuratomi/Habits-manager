import { createContext, useContext } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const submitRegister = (data) => {
    api
      .post("/users/", data)
      .then((_) => {
        toast.success("Cadastro realizado com sucesso!");

      })
      .catch((_) => toast.error("Algo deu errado, tente novamente!"));
  }

  return (
    <RegisterContext.Provider value={{ submitRegister }}>
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegister = () => useContext(RegisterContext);