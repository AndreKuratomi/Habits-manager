import { List } from "./styles";
import CardHabits from "../CardHabits";
import { useEffect } from "react";

import { useCards } from "../../Providers/Cards";

const ListHabits = () => {
  const { getElements, habits } = useCards();

  useEffect(() => {
    getElements();
  }, []);

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
