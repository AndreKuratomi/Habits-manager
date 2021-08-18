import CardActivities from "../CardActivities";
import { ListContainer } from "./styles";

const ListActivities = ({ activities }) => {
  return (
    <ListContainer>
      <h3>Atividades</h3>
      <ul>
        {activities.map((card) => (
          <li>
            <CardActivities card={card} />
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default ListActivities;
