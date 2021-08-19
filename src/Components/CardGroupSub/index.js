import { useGroupSubs } from "../../Providers/GroupsSubs";

import Button from "../Button";

import { Container, Header } from "./styles";

const CardGroupSub = ({ group }) => {
  const { name, description, activities, goals, users_on_group } = group;

  const { submitJoinGroup } = useGroupSubs();

  const desc = description.length > 82 ? description.substring(0, 82) + "..." : description;

  return (
    <Container>
      <Header>
        <p>{name} </p>
      </Header>
      <p>{desc}</p>
      <div>
        <p>Atividades: <span>{activities.length}</span></p>
        <p>Metas: <span>{goals.length}</span></p>
        <p>Membros: <span>{users_on_group.length}</span></p>
      </div>
      <Button onClick={() => submitJoinGroup(group.id)}>Entrar</Button>
    </Container>
  );
};

export default CardGroupSub;