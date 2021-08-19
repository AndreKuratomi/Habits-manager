import Input from "../Input";
import Button from "../Button";

import { Container } from "./styles";

import { FaCheck } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { VscError } from "react-icons/vsc";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRegister } from "../../Providers/Register";
import { useHistory, Link } from "react-router-dom";

const FormRegister = () => {
  const [show, setShow] = useState(false);
  const { submitRegister } = useRegister();
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de Usuário obrigatório!!"),
    email: yup
      .string()
      .required("Email obrigatório!!")
      .email("Digite um email valido"),
    password: yup
      .string()
      .min(6, "No minimo 6 digitos")
      .required("Senha obrigatorio!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submit = (data) => {
    submitRegister(data);
    return history.push("/login");
  };

  return (
    <Container>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          register={register}
          name="username"
          error={errors.username?.message}
          icon={errors.username ? VscError : FaCheck}
          type="text"
          placeholder={
            errors.username ? errors.username?.message : "Nome de Usuário"
          }
        />
        <Input
          register={register}
          name="email"
          error={errors.email?.message}
          icon={errors.email ? VscError : FaCheck}
          type="text"
          placeholder={
            errors.email ? errors.email?.message : "Seu melhor E-mail"
          }
        />
        <Input
          register={register}
          name="password"
          error={errors.password?.message}
          icon={show ? BsFillEyeSlashFill : BsFillEyeFill}
          setShow={setShow}
          show={show}
          pass={true}
          type={show ? "text" : "password"}
          placeholder={errors.password ? errors.password?.message : "Senha"}
        />

        <Button type="submit">Enviar</Button>
        <p>
          Já possui uma conta? Faça <Link to="/login">Login</Link>
        </p>
      </form>
    </Container>
  );
};

export default FormRegister;
