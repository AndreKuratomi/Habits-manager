import { FormLoginContainer } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { VscError } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useLogin } from "../../Providers/Login";

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

  const submit = (data) => {
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
