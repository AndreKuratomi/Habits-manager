import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import Button from "../Button";
import { Container } from "./style";

const CardActivities = ({ card }) => {
  return (
    <Container>
      <header>
        <h1>Atividade</h1>
      </header>
      <p>{card.title}</p>
      <p>
        <strong>Data pra realizacao:</strong> {card.realization_time}
      </p>
      {/* fazer a formatcao da data */}
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
