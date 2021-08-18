import { Container } from "./style";

const CardGoals = ( { card } ) => {
  return (
    <Container>
      <header>Metas</header>
      <div>
        <p>{card.title}</p>
        <p>Dificuldade: {card.difficulty}</p>
        <p>Quantos fizeram: {card.how_much_achieved}</p>
      </div>
    </Container>
  );
};

export default CardGoals;
