import CardActivities from "../CardActivities";
import { Lists } from "./styles";

const ListActivities = ({ activities }) => {
  return (
    <Lists>
      <h3>Atividades</h3>
      <div className="user-activities">
        {activities.map((card) => (
          <CardActivities card={card} />
        ))}
      </div>
    </Lists>
  );
};

export default ListActivities;
