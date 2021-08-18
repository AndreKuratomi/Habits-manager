import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import Button from "../Button";
import { Container } from "./style";

const CardActivities = ( { card } ) => {
  return (
    <Container>
      <header>Atividades</header>
      <div>
        {/* <p>{card.title}</p> */}
        {/* <span>Data pra realizacao: {card.realization_time}</span> */}
        {/* fazer a formatcao da data */}
      </div>
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
