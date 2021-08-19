import { List } from "./styles";
import CardHabits from "../CardHabits";

import { useHabits } from "../../Providers/Habits";

const ListHabits = () => {
  const { habits } = useHabits();

  return (
    <List>
      {habits.map((card) => (
        <li key={card.id}>
          <CardHabits card={card} />
        </li>
      ))}
    </List>
  );
};

export default ListHabits;
