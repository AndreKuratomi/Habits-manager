import { List } from "./styles";
import CardHabits from "../CardHabits";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

// import { useCards } from "../../Providers/Cards";

// const { getElements, habits } = useCards;

const token = JSON.parse(localStorage.getItem("@Habits:access"));

const ListHabits = () => {
  const [habits, setHabits] = useState([]);

  const getElements = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((items) => {
        console.log(items);
        setHabits([...habits, ...items.data]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => getElements(), []);

  const deleteElements = (id) => {
    const filter = habits.filter((item) => item.id !== id);

    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(setHabits(filter), toast.success("Card deletado com sucesso"))
      .catch((_) => toast.error("Erro de conexão"));
  };

  const updateElements = (id) => {
    api.patch(`habits/${id}`).then().catch();
  };

  return (
    <List>
      {habits.map((card) => (
        <li key={card.id}>
          <CardHabits
            card={card}
            deleteElements={deleteElements}
            updateElements={updateElements}
          />
        </li>
      ))}
    </List>
  );
};

export default ListHabits;
