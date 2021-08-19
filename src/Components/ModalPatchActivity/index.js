import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { ImCross } from "react-icons/im";
import Button from "../Button";

import { useUpdate } from "../../Providers/Update";

const ModalPatchActivity = ({ close, activity, activities, setActiv }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { updateActivity } = useUpdate();

  const onSubmitPatchActivity = (data) => {
    updateActivity(activity.id, data, activities, setActiv);
    close();
  };

  return (
    <Container>
      <header>
        <h1>Atualize a Atividade</h1>
        <ImCross onClick={() => close()} />
      </header>
      <form onSubmit={handleSubmit(onSubmitPatchActivity)}>
        <h3>Título</h3>
        <input placeholder="Novo título" {...register("title")} />

        <Button type="submit">Atualizar</Button>
      </form>
    </Container>
  );
};

export default ModalPatchActivity;
