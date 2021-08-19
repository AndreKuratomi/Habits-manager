import ListActivities from "../ListActivities";
import ListGoals from "../ListGoals";
import { Container } from "./styles";
import { ImCross } from "react-icons/im";
import { useGroupSubs } from "../../Providers/GroupsSubs";
import { useEffect, useState } from "react";
const ModalGroup = ({ close, group }) => {
  const { activities, goals, id } = group;

  const [activ, setActiv] = useState(activities);
  const [goa, setGoa] = useState(goals);

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
        <ListActivities activities={activ} setActiv={setActiv} groupId={id} />
        <ListGoals goals={goa} groupId={id} setGoa={setGoa} />
      </main>
    </Container>
  );
};

export default ModalGroup;
