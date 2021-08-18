import CardGoals from "../CardGoals";
import { ListGoalsContainer } from "./styles";

const ListGoals = ({ goals }) => {
  return (
    <ListGoalsContainer>
      <h3>Metas</h3>
      <ul>
        {goals.map((card) => (
          <li>
            <CardGoals card={card} />
          </li>
        ))}
      </ul>
    </ListGoalsContainer>
  );
};

export default ListGoals;
