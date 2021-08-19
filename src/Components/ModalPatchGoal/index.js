import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { ImCross } from "react-icons/im";
import Button from "../Button";

import { useUpdate } from "../../Providers/Update";

const ModalPatchGoal = ({ close, goal }) => {
  const formSchema = yup.object().shape({
    achieved: yup.boolean().required("Campo obrigatório!"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { updateGoal } = useUpdate();

  const onSubmitPatchGoal = (data) => {
    updateGoal(goal.id, data);
    close();
  };

  return (
    <Container>
      <header>
        <h1>Atualize a Meta</h1>
        <ImCross onClick={() => close()} />
      </header>
      <form onSubmit={handleSubmit(onSubmitPatchGoal)}>
        <h3>Alcançado</h3>
        <select {...register("achieved")}>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>

        <Button type="submit">Atualize este hábito!</Button>
      </form>
    </Container>
  );
};

export default ModalPatchGoal;
