import { Container } from "./style";

const CardActivities = ( {card } ) => {
  return (
    <Container>
      <header>Atividades</header>
      <div>
        <p>{card.title}</p>
        <span>Data pra realizacao: {card.realization_time}</span>
        {/* fazer a formatcao da data */}
      </div>
    </Container>
  );
};

export default CardActivities;
