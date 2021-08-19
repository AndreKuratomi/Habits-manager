import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { ImCross } from "react-icons/im";
import Button from "../Button";

import { useUpdate } from "../../Providers/Update";

const ModalPatchHabit = ({ close, card }) => {
  const formSchema = yup.object().shape({
    achieved: yup.boolean().required("Campo obrigatório!"),
    how_much_achieved: yup.number().required("Campo obrigatório!"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { updateElements } = useUpdate();

  const onSubmitFunction = (data) => {
    updateElements(card.id, data);
  };

  return (
    <Container>
      <header>
        <h1>Atualize</h1>
        <ImCross onClick={() => close()} />
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <h3>Alcançado</h3>
          <select {...register("achieved")}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <div>
          <h3>Porcentagem alcançada</h3>
          <select {...register("how_much_achieved")}>
            <option value="0">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
            <option value="60">60%</option>
            <option value="70">70%</option>
            <option value="80">80%</option>
            <option value="90">90%</option>
            <option value="100">100%</option>
          </select>
        </div>
        <Button type="submit">Atualize este hábito!</Button>
      </form>
    </Container>
  );
};

export default ModalPatchHabit;
