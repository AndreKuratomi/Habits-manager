import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ImCross } from "react-icons/im";
import Button from "../Button";
import { Container } from "./styles";
import { useLogin } from "../../Providers/Login";
import api from "../../Services/api";
import { toast } from "react-toastify";

const ModalNewGoal = ({ close, groupId, goals, setGoa }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Preenchimento obrigatório!"),
    difficulty: yup.string().required("Campo obrigatório!"),
    how_much_achieved: yup.number().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { user } = useLogin();

  const onSubmitGoal = (data) => {
    createGoal(data);
    close();
  };

  const createGoal = (data) => {
    api
      .post(
        `/goals/`,
        { ...data, group: groupId },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((resp) => {
        setGoa([...goals, resp.data]);
        toast.success("Meta Cadastrada");
      })
      .catch((_) => toast.error("Erro ao cadastrar"));
  };

  return (
    <Container>
      <header>
        <h1>Cadastre uma nova Meta</h1>
        <ImCross onClick={() => close()} />
      </header>
      <form onSubmit={handleSubmit(onSubmitGoal)}>
        <h3>Título</h3>
        <input
          placeholder={
            errors.title ? errors.title?.message : "Preencher título"
          }
          {...register("title")}
        />

        <h3>Dificuldade</h3>
        <select {...register("difficulty")}>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
          <option value="Muito difícil">Muito difícil</option>
        </select>

        <h3>Quanto Alcançado</h3>
        <input
          type="number"
          placeholder={
            errors.how_much_achieved
              ? errors.how_much_achieved?.message
              : "0 - 100"
          }
          {...register("how_much_achieved")}
        />
        <Button type="submit">Cadastrar nova Meta!</Button>
      </form>
    </Container>
  );
};

export default ModalNewGoal;
