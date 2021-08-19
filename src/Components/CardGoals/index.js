import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useLogin } from "../../Providers/Login";
import api from "../../Services/api";
import Button from "../Button";
import { Container } from "./style";

const CardGoals = ({ goal }) => {
  const { user } = useLogin();

  const handleDeleteGoal = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => toast.success("Meta Deletada"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <header>
        <h1>Meta</h1>
      </header>

      <p>
        <strong>Nome:</strong>
        <br /> {goal.title}
      </p>
      <p>
        <strong>Dificuldade:</strong>
        <br /> {goal.difficulty}
      </p>
      <p>
        <strong>Quantos fizeram:</strong>
        <br /> {goal.how_much_achieved}
      </p>

      <div>
        <Button>
          <IoMdRefreshCircle />
        </Button>
        <Button onClick={() => handleDeleteGoal(goal.id)}>
          <IoMdRemoveCircle />
        </Button>
      </div>
    </Container>
  );
};

export default CardGoals;
