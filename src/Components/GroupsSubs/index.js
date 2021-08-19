import { Container } from "./styles";
import CardGroupSub from "../CardGroupSub";
import CardGroupsUser from "../CardGroupsUser";

const GroupsSubs = ({ groups, card }) => {
  return (
    <Container>
      {groups.map((group) => (
        card === "AllGroups" ?
        <CardGroupSub key={group.id} group={group} />
        : 
        <CardGroupsUser key={group.id} group={group}/>
      ))}
    </Container>
  );
};

export default GroupsSubs;
