import CardGoals from "../CardGoals";
import { ListGoalsContainer } from "./styles";

const ListGoals = ({ goals }) => {
  return (
    <ListGoalsContainer>
      <h3>Metas</h3>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CardGoals card={goal} />
          </li>
        ))}
      </ul>
    </ListGoalsContainer>
  );
};

export default ListGoals;
