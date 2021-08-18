import ListActivities from "../ListActivities";
import ListGoals from "../ListGoals";
import { Container } from "./styles";
import { ImCross } from "react-icons/im";
const ModalGroup = ({ close, group }) => {
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
        <ListActivities activities={group.activities} />
        <section>
          <ListGoals goals={group.goals} />
        </section>
      </main>
    </Container>
  );
};

export default ModalGroup;
