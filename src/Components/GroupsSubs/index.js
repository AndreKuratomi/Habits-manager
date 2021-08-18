import { Container } from "./styles";
import CardGroupSub from "../CardGroupSub";

const GroupsSubs = ({ groups }) => {

  return (
    <Container>
      {
        groups.map(group => <CardGroupSub key={group.id} group={group} />)
      }
    </Container>
  );
}

export default GroupsSubs;