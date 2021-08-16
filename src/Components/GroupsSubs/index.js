import { Container } from "./styles";
import CardGroupSub from "../CardGroupSub";
import { useGroupSubs } from "../../Providers/GroupsSubs";

const GroupsSubs = () => {
  const { groups } = useGroupSubs();

  return (
    <Container>
      {
        groups.map(group => <CardGroupSub key={group.id} group={group} />)
      }
    </Container>
  );
}

export default GroupsSubs;