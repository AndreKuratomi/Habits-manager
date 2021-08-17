import { List } from "./styles";
import CardHabits from "../CardHabits";
import { useCards } from "../../Providers/Cards";
import { useEffect } from "react";

// useEffect(() => , [])

const ListHabits = () => {
  const { something } = useCards();
  console.log(something(5153));

  return (
    <List>
      <CardHabits achieved={true} />
      <CardHabits achieved={false} />
    </List>
  );
};

export default ListHabits;
