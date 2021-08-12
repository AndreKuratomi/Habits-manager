import { Container } from "./styles";

const CardGroupSub = ({ group }) => {
  const { name, description } = group;

  const desc = description.length > 74 ? description.substring(0, 74) + '...' : description;

  return (
    <Container>
      <h3>{name}</h3>
      <p>{desc}</p>
    </Container>
  );
}

export default CardGroupSub;