import { IoMdRefreshCircle, IoMdRemoveCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useLogin } from "../../Providers/Login";
import api from "../../Services/api";
import Button from "../Button";
import { Container } from "./style";

const CardActivities = ({ activity }) => {
  const { user } = useLogin();

  const handleDeleteActivity = (id) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((_) => toast.success("Atividade Deletada"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <header>
        <h1>Atividade</h1>
      </header>
      <p>{activity.title}</p>
      <p>
        <strong>Data pra realizacao:</strong> {activity.realization_time}
      </p>
      {/* fazer a formatcao da data */}
      <div>
        <Button>
          <IoMdRefreshCircle />
        </Button>
        <Button onClick={() => handleDeleteActivity(activity.id)}>
          <IoMdRemoveCircle />
        </Button>
      </div>
    </Container>
  );
};

export default CardActivities;
