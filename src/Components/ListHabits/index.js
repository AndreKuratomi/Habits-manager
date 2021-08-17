import { List } from "./styles";
import CardHabits from "../CardHabits";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

const ListHabits = () => {
  const [habits, setHabits] = useState([]);

  const getElements = () => {
    api
      .get("/habits/")
      .then((items) => {
        setHabits([...habits, ...items.data.results]);
      })
      .catch((_) => toast.error("Erro de conexão"));
  };

  useEffect(() => getElements(), []);

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
