import CardGoals from "../CardGoals";
import { Lists } from "./styles";

const ListGoals = ({ goals }) => {
  return (
    <Lists>
      <div className="user-goals">
        {goals.map((card) => (
          <CardGoals card={card} />
        ))}
      </div>
    </Lists>
  );
};

export default ListGoals;
