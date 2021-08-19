import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import Button from "../Button";
import { ImCross } from "react-icons/im";

import { useGroupsList } from "../../Providers/GroupsList";

const ModalGroups = ({ close }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Preenchimento obrigatório!"),
    description: yup.string().required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { submitGroup } = useGroupsList();

  const onSubmitFunction = (data) => {
    submitGroup(data);
  };

  return (
    <Container>
      <header>
        <h1>Cadastrar novo grupo</h1>
        <ImCross onClick={close} />
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Título</h3>
        <input
          placeholder={
            errors.title ? errors.title?.message : "Preencher Nome"
          }
          {...register("name")}
        />
        <div>
          <h3>Descrição</h3>
          <input
            placeholder={
              errors.description
                ? errors.description?.message
                : "Preencher descrição"
            }
            {...register("description")}
          />
        </div>

        <div>
          <h3>Categoria</h3>
          <select {...register("category")}>
            <option value="Saúde">Saúde</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Sono">Sono</option>
            <option value="Atividade física">Atividade física</option>
            <option value="Tecnologia">Tecnologia</option>
          </select>
        </div>

        <Button type="submit" onClick={close}>
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default ModalGroups;
