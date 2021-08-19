import { useState } from "react";
import { Link } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { VscError } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import Input from "../Input";
import Button from "../Button";

import { useLogin } from "../../Providers/Login";
// import { useAuth } from "../../Providers/Auth";
import { FormLoginContainer } from "./styles";

const FormLogin = () => {
  const [show, setShow] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Nome de Usuário Obrigatório!!"),
    password: yup.string().required("Senha Obrigatória!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { submitLogin } = useLogin();
  // const { setAuth } = useAuth();

  const submit = (data) => {
    // setAuth(true);
    submitLogin(data);
  };

  return (
    <FormLoginContainer onSubmit={handleSubmit(submit)}>
      <h2>Login</h2>
      <Input
        register={register}
        name="username"
        error={errors.username?.message}
        icon={errors.username ? VscError : FaCheck}
        placeholder={
          errors.username ? errors.username?.message : "Nome de Usuário"
        }
      />
      <Input
        register={register}
        name="password"
        error={errors.password?.message}
        icon={show ? BsFillEyeSlashFill : BsFillEyeFill}
        setShow={setShow}
        show={show}
        pass
        type={show ? "text" : "password"}
        placeholder={errors.password ? errors.password?.message : "Senha"}
      />

      <Button type="submit">Entrar</Button>

      <p>
        Não possui conta? <Link to="/signup">Cadastre-se</Link>
      </p>
    </FormLoginContainer>
  );
};

export default FormLogin;
