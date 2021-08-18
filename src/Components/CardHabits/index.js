import { Container } from "./style";
import { CgCheck } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";

import { useCards } from "../../Providers/Cards";

// const { deleteElements, updateElements } = useCards;

// import { useDelete } from "../../Providers/DeleteElements";

// const { deleteElements, updateElements } = useDelete;

const CardHabits = ({ card, deleteElements, updateElements }) => {
  return (
    <Container card={card}>
      <header>
        <h1>{card.title}</h1>
      </header>
      <div>
        <h1>{card.category}</h1>
        {card.achieved === true ? (
          <CgCheck color="var(--green)" />
        ) : (
          <IoIosClose color="var(--orange)" />
        )}
      </div>
      <p>Dificuldade: {card.difficulty}</p>
      <p>Frequência: {card.frequency}</p>
      <p>Alcançado: {card.how_much_achieved}</p>
      <div>
        <button onClick={updateElements}>Atualizar hábito</button>
        <button onClick={() => deleteElements(card.id)}>Deletar hábito</button>
      </div>
    </Container>
  );
};

export default CardHabits;
