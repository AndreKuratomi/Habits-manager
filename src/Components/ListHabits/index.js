import { List } from "./styles";
import CardHabits from "../CardHabits";
// import { useCards } from "../../Providers/Cards";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

// const { getElements, habits } = useCards;
const ListHabits = () => {
  const [habits, setHabits] = useState([]);

  const getElements = () => {
    api
      .get("/habits/")
      .then((items) => {
        console.log(items);
        setHabits([...habits, ...items.data.results]);
      })
      .catch((_) => toast.error("Erro de conexão"));
  };

  useEffect(() => getElements(), []);

  console.log(habits);
  return (
    <List>
      {habits.map((card) => (
        <li key={card.id}>
          <CardHabits card={card} />
        </li>
      ))}
      {/* <CardHabits achieved={true} />
      <CardHabits achieved={false} /> */}
    </List>
  );
};

// const ListHabits = () => {
//   return (
//     <List>
//       <CardHabits achieved={true} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//       <CardHabits achieved={false} />
//     </List>
//   );
// };

export default ListHabits;
