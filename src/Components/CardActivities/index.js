import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import Button from "../Button";
import { Container } from "./style";

const CardActivities = () => {
  return (
    <Container>
      <header>
        <h1>Atividade</h1>
      </header>

      <p>
        <strong>Nome: </strong>
        <br />
        Viajar para a cidade vizinha
      </p>
      <p>
        <strong>Data pra realizacao:</strong>
        <br /> 01-10-2021
      </p>

      <div>
        <Button>
          <IoMdRefreshCircle />
        </Button>
        <Button>
          <IoMdRemoveCircle />
        </Button>
      </div>
    </Container>
  );
};

export default CardActivities;
