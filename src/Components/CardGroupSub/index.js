import { useGroupSubs } from "../../Providers/GroupsSubs";

import Button from "../Button";

import { Container } from "./styles";

const CardGroupSub = ({ group }) => {
  const { name, description } = group;
  const { submitJoinGroup } = useGroupSubs();

  return (
    <Container>
      <h3>
        <span>{name}</span>
      </h3>
      <p>{description}</p>
      <Button onClick={() => submitJoinGroup(group.id)}>Entrar</Button>
    </Container>
  );
};

export default CardGroupSub;
