import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ImCross } from "react-icons/im";
import Button from "../Button";
import { Container } from "./styles";
import api from "../../Services/api";
import { toast } from "react-toastify";
import { useUser } from "../../Providers/User";

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

  const { user } = useUser();

  const onSubmitActivity = (data) => {
    data.realization_time = `${data.realization_time.slice(6)}-${data.realization_time.slice(3, 5)}-${data.realization_time.slice(0, 2)}T15:00:00Z`;
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
              : "DD/MM/AA"
          }
          {...register("realization_time")}
        />

        <Button type="submit">Cadastrar nova Atividade!</Button>
      </form>
    </Container>
  );
};

export default ModalNewActivity;
