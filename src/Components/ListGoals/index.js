import { useState } from "react";
import BackgroundModal from "../BackgroundModal";
import Button from "../Button";
import CardGoals from "../CardGoals";
import ModalNewGoal from "../ModalNewGoal";
import { ListGoalsContainer } from "./styles";

const ListGoals = ({ goals, groupId, setGoa }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ListGoalsContainer>
      <BackgroundModal
        children={
          <ModalNewGoal
            close={closeModal}
            groupId={groupId}
            goals={goals}
            setGoa={setGoa}
          />
        }
        modal={modal}
      />
      <h3>Metas</h3>
      <Button onClick={openModal}>Nova Meta</Button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CardGoals goal={goal} goals={goals} setGoa={setGoa} />
          </li>
        ))}
      </ul>
    </ListGoalsContainer>
  );
};

export default ListGoals;
