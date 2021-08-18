import { Container } from "./styles";
import { useGroupSubs } from "../../Providers/GroupsSubs";

const CardGroupSub = ({ group }) => {
  const { name, description } = group;
  const nam = name.length > 40 ? name.substring(0, 40) + '...' : name;
  const desc = description.length > 74 ? description.substring(0, 74) + '...' : description;

  const { submitJoinGroup } = useGroupSubs();

  return (
    <Container>
      <h3>{nam}</h3>
      <p>{desc}</p>
      <button onClick={() => submitJoinGroup(group.id)}>Entrar</button>
    </Container>
  );
}

export default CardGroupSub;