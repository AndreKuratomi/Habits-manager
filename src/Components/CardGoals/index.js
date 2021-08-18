import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import Button from "../Button";
import { Container } from "./style";

const CardGoals = ( { card } ) => {
  return (
    <Container>
      <header>
        <h1>Meta</h1>
      </header>

      <p>
        <strong>Nome:</strong>
        <br /> Emagrecer 10kg em 3 meses
      </p>
      <p>
        <strong>Dificuldade:</strong>
        <br /> Medio
      </p>
      <p>
        <strong>Quantos fizeram:</strong>
        <br /> 50
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

export default CardGoals;
