import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import Button from "../Button";
import { Container } from "./style";

const CardGoals = ({ card }) => {
  return (
    <Container>
      <header>
        <h1>Meta</h1>
      </header>

      <p>
        <strong>Nome:</strong>
        <br /> {card.title}
      </p>
      <p>
        <strong>Dificuldade:</strong>
        <br /> {card.difficulty}
      </p>
      <p>
        <strong>Quantos fizeram:</strong>
        <br /> {card.how_much_achieved}
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
