import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const SubPages = () => {
  const formSchema = yup.object.shape({
    title: yup.string().required("Preenchimento obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
    frequency: yup.string().required("Campo obrigatório!"),
    dificulty: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <article>
      <h1>Cadastre um novo {habito} a ser alcançado!</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Título" {...register("title")} />
        <div>
          <h3>Categoria</h3>
          <select {...register("category")}>
            <option value="Saúde">Saúde</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Sono">Sono</option>
            <option value="Atividade física">Atividade física</option>
          </select>
          {/*
        Planejamento diário (especifique) */}
        </div>
        <div>
          <h3>Frequencia</h3>
          <select {...register("frequency")}>
            <option value="Diária">Diária</option>
            <option value="Semanal">Semanal</option>
            <option value="Quinzenal">Quinzenal</option>
            <option value="Mensal">Mensal</option>
          </select>
        </div>
        <div>
          Semanal
          <h3>Dificuldade</h3>
          <select {...register("dificulty")}>
            <option value="Fácil">Fácil</option>
            <option value="Médio">Médio</option>
            <option value="Difícil">Difícil</option>
            <option value="Muito difícil">Muito difícil</option>
          </select>
        </div>
        <button type="submit">Cadastrar novo {habito}!</button>
      </form>
    </article>
  );
};

export default SubPages;
