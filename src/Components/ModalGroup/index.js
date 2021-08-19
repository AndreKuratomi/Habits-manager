import ListActivities from "../ListActivities";
import ListGoals from "../ListGoals";
import { Container } from "./styles";
import { ImCross } from "react-icons/im";
const ModalGroup = ({ close, group }) => {
  const { activities, goals, id } = group;

  return (
    <Container>
      <header>
        <div>
          <h1>{group.name}</h1>
          <ImCross onClick={() => close()} />
        </div>
        <div>
          <p>{group.description}</p>
          <p>Criador: {group.creator.username}</p>
        </div>
      </header>

      <main>
        <ListActivities activities={activities} groupId={id} />
        <ListGoals goals={goals} />
      </main>
    </Container>
  );
};

export default ModalGroup;
