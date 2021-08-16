import CardGoals from "../CardGoals";
import { Lists } from "./styles";

const ListGoals = ({ goals }) => {
  return (
    <Lists>
      <h3>Metas</h3>
      <div className="user-goals">
        {goals.map((card) => (
          <CardGoals card={card} />
        ))}
      </div>
    </Lists>
  );
};

export default ListGoals;
