import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ImCross } from "react-icons/im";
import Button from "../Button";
import { Container } from "./styles";
import api from "../../Services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLogin } from "../../Providers/Login";

const ModalNewActivity = ({ close, groupId, setActiv, activities }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Preenchimento obrigatório!"),
    realization_time: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { user } = useLogin();

  const onSubmitActivity = (data) => {
    createActivity(data);
    close();
  };

  const createActivity = (data) => {
    api
      .post(
        `/activities/`,
        { ...data, group: groupId },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((resp) => {
        setActiv([...activities, resp.data]);
        toast.success("Atividade Cadastrada");
      })
      .catch((_) => toast.error("Erro ao cadastrar"));
  };

  return (
    <Container>
      <header>
        <h1>Cadastre uma nova Atividade</h1>
        <ImCross onClick={() => close()} />
      </header>
      <form onSubmit={handleSubmit(onSubmitActivity)}>
        <h3>Título</h3>
        <input
          placeholder={
            errors.title ? errors.title?.message : "Preencher título"
          }
          {...register("title")}
        />

        <h3>Data para realização</h3>
        <input
          placeholder={
            errors.realization_time
              ? errors.realization_time?.message
              : "Preencher Data"
          }
          {...register("realization_time")}
        />

        <Button type="submit">Cadastrar nova Atividade!</Button>
      </form>
    </Container>
  );
};

export default ModalNewActivity;
