import CardActivities from "../CardActivities";
import { ListContainer } from "./styles";

const ListActivities = ({ activities }) => {
  return (
    <ListContainer>
      <h3>Atividades</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <CardActivities card={activity} />
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default ListActivities;
